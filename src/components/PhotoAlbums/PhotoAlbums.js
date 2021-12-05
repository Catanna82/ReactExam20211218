import { useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from "../Logo/Logo";
import AlbumCard from "./PhotoAlbumCard";
import './photoAlbums.css';

const PhotoAlbums = () => {
    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        <div className='photo-albums'>
            < Logo />
            <h1 className="album-title"> Photo Albums</h1>
            <div id="photo-container">
                <AlbumCard imgUrl='images/back1.jpg' />
                <AlbumCard imgUrl='images/back2.jpg' />
                <AlbumCard imgUrl='images/back3.jpg' />
                <AlbumCard imgUrl='images/back4.jpg' />
                <AlbumCard imgUrl='images/back5.jpg' />
                <AlbumCard imgUrl='images/back1.jpg' />
                <AlbumCard imgUrl='images/back2.jpg' />
                <AlbumCard imgUrl='images/back3.jpg' />
                <AlbumCard imgUrl='images/back4.jpg' />
                <AlbumCard imgUrl='images/back5.jpg' />
                <AlbumCard imgUrl='images/back1.jpg' />
                <AlbumCard imgUrl='images/back2.jpg' />
                <AlbumCard imgUrl='images/back3.jpg' />
                <AlbumCard imgUrl='images/back4.jpg' />
                <AlbumCard imgUrl='images/back5.jpg' />
                <AlbumCard imgUrl='images/back1.jpg' />
                <AlbumCard imgUrl='images/back2.jpg' />
                <AlbumCard imgUrl='images/back3.jpg' />
                <AlbumCard imgUrl='images/back4.jpg' />
                <AlbumCard imgUrl='images/back5.jpg' />
            </div>
        </div>
    )
    : <Redirect to='/' />
}

export default PhotoAlbums;