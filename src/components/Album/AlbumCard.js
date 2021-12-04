import './album.css';
const AlbumCard = ({title, img, className}) => {
    return (
        <div className={className}>
        <img className='album-img' title={title} src={img} alt='' />
        </div>
    );
}

export default AlbumCard;