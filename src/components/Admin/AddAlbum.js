import Logo from '../Logo/Logo';
import UploadImg from '../UploadImg/UploadImg';
import './addAlbumStyle.css';
import { Redirect } from 'react-router';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';


const Admin = ({ postFetch, getFetch }) => {
    let history = useHistory();
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState('');
    const [albumName, setAlbumName] = useState('');
    const [userID, setUserID] = useState('');
    const [userNames, setUserNames] = useState([]);

    const load = async () => {
        const data = await getFetch('/api/loadUsers');
        setUserNames(data);
    }

    useEffect(() => load(), []);

    const chooseUploadImg = async (e) => {
        e.preventDefault();
        const localFiles = [];
        const files = e.target.files;
        const reader = new FileReader();
        const readFile = async (index) => {
            if (index >= files.length) {
                setImages(localFiles);
                return;
            };
            const file = files[index];
            reader.onload = async (e) => {
                (e.target && e.target.result && localFiles.push(e.target.result));
                await readFile(index + 1)
            };
            await reader.readAsDataURL(file);
        }
        await readFile(0);
    }

    const uploadImages = (e) => {
        e.preventDefault();
        postFetch('/api/saveAlbums', {
            albumName: albumName,
            category: category,
            images: images,
            userID: userID
        });
        history.push('/');
    }

    const changeCategory = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    }

    const changeAlbumName = (e) => {
        e.preventDefault();
        setAlbumName(e.target.value);
    }

    const changeUserID = (e) => {
        e.preventDefault();
        setUserID(e.target.value);
    }

    const { user: {
        isAdmin
    } } = useContext(AuthContext);
    return isAdmin
        ? (
            <>
                <Logo />
                <div className='admin-page'>
                    <main className='admin-main'>
                        <div className='admin-page-main-container-upload'>
                            <div id='admin-form' className='admin' action='' method='POST'>
                                <div className='flex'>
                                    <div className='flex'>
                                        <p>
                                            Име на албума:
                                            <input className='album-name-input' type='text' name='albumName' id='albumName' value={albumName} onChange={changeAlbumName} />
                                        </p>
                                    </div>
                                    <div className='flex'>
                                        <p>
                                            Потребител:
                                            <select name='userName' id='user' className='admin-category' onChange={changeUserID} value={userID} >
                                                <option value=''>Изберете потребител</option>
                                                {
                                                    userNames.map(({ name, userID }) => (
                                                        <option key={userID} value={userID}>{name}</option>
                                                    ))
                                                }
                                            </select>
                                        </p>
                                    </div>
                                    <form id='upload-form' className='admin' method='POST'>
                                        <input className='admin-add-img' type='file' id='images' name='images' multiple onChange={chooseUploadImg} />
                                    </form>
                                    <div className='flex'>
                                        <p>
                                            Категория:
                                            <select name='category' id='category' className='admin-category' onChange={changeCategory} value={category}>
                                                <option value='' disabled>Изберете категория</option>
                                                <option value='Event'>Събития</option>
                                                <option value='Weddings'>Сватби</option>
                                                <option value='Portrait'>Портрети</option>
                                                <option value='Kids'>Деца</option>
                                                <option value='Vintage'>Винтидж</option>
                                                <option value='Nature'>Природа</option>
                                                <option value='Animals'>Животни</option>
                                                <option value='Flowers'>Растения</option>
                                                <option value='Bw'>Черно &amp; Бяло</option>
                                                <option value='rz'>Разни</option>
                                            </select>
                                        </p>
                                    </div>
                                    <button className='admin-btn' >Отхвърли</button>
                                    <button className='admin-btn' onClick={uploadImages} >Запази</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <UploadImg images={images} />
            </>
        )
        : <Redirect to='/' />
}

export default Admin;