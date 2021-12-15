import { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from "../Logo/Logo";
import AlbumCard from "./PhotoAlbumCard";
import './photoAlbums.css';
import Loader from '../Common/Loader/Loader';

const PhotoAlbums = ({ getFetch }) => {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadAlbums = async () => {
        const data = await getFetch('/api/loadAlbums');
        setAlbums(data);
        setLoading(false);
    }

    useEffect(() => loadAlbums(), [])

    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        loading ? <Loader />
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
                                    />
                                ))
                            }
                        </ul>
                    </section>
                </div>
            </>
    )
        : <Redirect to='/' />
}

export default PhotoAlbums;