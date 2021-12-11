
const AlbumCard = ({ img }) => {
    return (
        <li className='gallery-li'>
            <img src={img} alt='' className='gallery-card-img' />
        </li>
        // <div className='one-fifth'>
        //     <p>
        //         <a title='Caption Text' href='#' className='portfolio-item-preview' >
        //             <img src={img} alt='' className='portfolio-img pretty-box' />
        //         </a>
        //     </p>
        // </div>
    );
}

export default AlbumCard;