const AlbumCard = ({ imgUrl }) => {
    return (
        <div className='one-fifth'>
            <p>
                <a title='Caption Text' href='#' className='portfolio-item-preview'>
                    <img src={imgUrl} alt='' className='portfolio-img pretty-box' />
                </a>
            </p>
        </div>
    );
}

export default AlbumCard;