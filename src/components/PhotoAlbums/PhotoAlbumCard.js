const AlbumCard = ({ img, previewAlbum, albumID }) => {
    const previewAlbumHandler = (e) => {
        e.preventDefault();
        previewAlbum(albumID);
    };
    return (
        <li className='gallery-li' onClick={(e) => previewAlbumHandler(e)}>
            <img src={img} alt='' className='gallery-card-img' />
        </li>
    );
}

export default AlbumCard;