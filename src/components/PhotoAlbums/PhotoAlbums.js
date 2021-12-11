import { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from "../Logo/Logo";
import AlbumCard from "./PhotoAlbumCard";
import styles from './photoAlbums.module.css';

const PhotoAlbums = ({ getFetch }) => {

    const [albums, setAlbums] = useState([]);

    const loadAlbums = async () => {
        const data = await getFetch('/api/loadAlbums');
        setAlbums(data);
    }

    useEffect(() => loadAlbums(), [])

    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        <>
            < Logo />
        <div className={styles['photo-albums']}>
            <h1 className={styles['album-title']}> Photo Albums</h1>
            <section className={styles["gallery"]}>
                <ul className={styles['gallery-ul']}>
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