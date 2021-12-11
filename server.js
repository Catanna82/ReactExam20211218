const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongoose');
const dbox = require('dropbox');
const dbx = new dbox.Dropbox({ accessToken: '4jQ0LLOKtgwAAAAAAAAAAU_NyMgE15XWXB8vyI_dwyMt8QcAU1IviNR9a_TqlXQt' });
const uuid = require('uuid').v4;

(function connect() {
    return new Promise((resolve, reject) => {
        mongo.connect('mongodb+srv://Catanna:jacoepi4@cluster0.bev5u.mongodb.net/JTStudioDB?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongo.connection;
        db.on('error', err => {
            console.error('Database error: ', err.message);
            reject(err.message);
        });
        db.on('open', () => {
            console.log('Database connected');
            resolve();
        });
    });

})();

const app = express();
app.use(bodyParser({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const Schema = mongo.Schema;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    admin: { type: Boolean }
}, { versionKey: false });

const CommentsSchema = new Schema({
    userID: { type: String },
    date: { type: Date },
    msg: { type: String },
}, { versionKey: false });

const AlbumsSchema = new Schema({
    albumName: { type: String },
    category: { type: String },
    images: { type: Array },
    userID: { type: String }
}, { versionKey: false });

const albumsModel = mongo.model('albums', AlbumsSchema, 'albums');
const commentsModel = mongo.model('comments', CommentsSchema, 'comments');
const model = mongo.model('users', UserSchema, 'users');

app.post('/api/SaveUser', function (req, res) {
    model.find({}, function (err, data) {
        let admin;
        if (err) {
            res.send(err);
        } else {
            if (data.length === 0) {
                admin = true;
            } else {
                admin = false;
            }
            const mod = new model({ ...req.body, admin });
            mod.save(function (err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ data: 'Record has been Inserted..!!' });
                }
            });
        }
    });
});

app.post('/api/deleteUser', function (req, res) {
    model.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'Record has been Deleted..!!' });
        }
    });
});

app.post('/api/login', function (req, res) {
    model.find(req.body, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({ userID: data[0]._id, isAdmin: data[0].admin });
        }
    });
});

app.post('/api/saveComment', function (req, res) {
    const mod = new commentsModel(req.body);
    mod.save(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'Record has been Inserted..!!' });
        }
    });
});

app.get('/api/loadUsers', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data.map(({ _id, name }) => ({ userID: _id, name })));
        }
    });
});

app.get('/api/loadComment/:userID', function (req, res) {
    commentsModel.find({ userID: req.params.userID }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
app.get('/api/loadComment', function (req, res) {
    commentsModel.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

app.get('/api/loadImages', function (req, res) {
    albumsModel.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            const images = data.reduce((acc, e) => {
                return acc.concat(e.images);
            }, []);

            let viewImg = [];
            function getRandom(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            for (let index = 0; index < 9; index++) {
                const num = getRandom(0, images.length - 1);
                let el = images.splice(num, 1);
                viewImg = viewImg.concat(el);
            }
            res.send(viewImg);
        }
    });
});

app.get('/api/loadAlbums', function (req, res) {
    albumsModel.find({}, async function (err, data) {
        if (err) {
            res.send(err);
        } else {
            const albums = await data.map(async(a) => {
                const img = a.images[0];
                const file = await dbx.filesDownload({path: '/' + img});
                return {
                    img: file.result.fileBinary.toString(),
                    albumID: a._id
                };
            })
            const returnData = await Promise.all(albums);
            res.send(returnData);
        }
    });
});

app.get(`/api/loadAlbums/:albumName`, function (req, res) {
    albumsModel.findOne(req.params, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data.images);
        }
    });
});

app.post('/api/saveAlbums', function (req, res) {
    albumsModel.find({ albumName: req.body.albumName }, async function (err, data) {
        if (err) {
            res.send(err);
        } else {
            if (data.length === 0) {
                const fileNames = await req.body.images.reduce(async (acc, curr) => {
                    const accAwaited = await acc;
                    const fileName = uuid();
                    await dbx.filesUpload({ path: '/' + fileName, contents: curr });
                    accAwaited.push(fileName);
                    return accAwaited;
                }, []);
                const dataMod = new albumsModel({ ...req.body, images: fileNames });
                dataMod.save(function (err, data) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send({ data: 'Record has been Inserted..!!' });
                    }
                });
            }
        }
    });

});

app.listen(3030, function () {
    console.log('App listening on port 3030');
});