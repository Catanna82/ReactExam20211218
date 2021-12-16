import { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from "../Logo/Logo";
import AlbumCard from "./PhotoAlbumCard";
import './photoAlbums.css';
import Loader from '../Common/Loader/Loader';
import AlbumPreview from '../AlbumPreview/AlbumPreview';

const PhotoAlbums = ({ getFetch, postFetch, userId }) => {

    const [albums, setAlbums] = useState([]);
    const [albumID, setAlbumID] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadAlbums = async () => {
        let params;
        if(isAdmin) {
            params = {};
        } else if(userId){
            params = {
                userID
            }
        } else {
            params = {
                userID: ''
            }
        }
        const data = await postFetch('/api/loadAlbums', params);
        setAlbums(data);
        setLoading(false);
    }


    const previewAlbum = (albumID) => {
        setAlbumID(albumID);
    }
    useEffect(() => loadAlbums(), [])

    const { user: {
        userID,
        isAdmin
    } } = useContext(AuthContext);
    return userID ? (
        loading ? <Loader />
            : albumID
                ? <>
                    <AlbumPreview albumID={albumID} getFetch={getFetch}/>
                </>
                : <>
                    < Logo />
                    <div className='photo-albums'>
                        <h1 className='album-title'>Фото албуми</h1>
                        <section className="gallery">
                            <ul className='gallery-ul'>
                                {
                                    albums.map(({ img, albumID }) => (
                                        <AlbumCard
                                            img={img}
                                            key={albumID}
                                            albumID={albumID}
                                            previewAlbum={previewAlbum}
                                        />
                                    ))
                                }
                            </ul>
                        </section>
                    </div>
                </>
    )
        : <Redirect to='/login' />
}

export default PhotoAlbums;