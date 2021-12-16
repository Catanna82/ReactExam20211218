const AlbumCard = ({ img, previewAlbum, albumID, deletable, deleteAlbum }) => {
    const previewAlbumHandler = (e) => {
        e.preventDefault();
        previewAlbum(albumID);
    };
    const deleteAlbumHandler = (e) => {
        e.preventDefault();
        deleteAlbum(albumID);
    };
    return (
        <li className='gallery-li' onClick={
            (e) => deletable
                ? deleteAlbumHandler(e)
                : previewAlbumHandler(e)}>
            <img src={img} alt='' className='gallery-card-img' />
        </li>
    );
}

export default AlbumCard;