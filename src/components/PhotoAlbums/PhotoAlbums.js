import Logo from "../Logo/Logo";
import AlbumCard from "./PhotoAlbumCard";
import './photoAlbums.css';

const PhotoAlbums = () => {
    return (
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
    );
}

export default PhotoAlbums;