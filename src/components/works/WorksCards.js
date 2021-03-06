const WorkCards = ({ img, title, description, }) => {

    return (
        <figure className='effect-oscar  wowload fadeInUp'>
            <img src={img} alt='img01' />
            <figcaption>
                <h2>{title}</h2>
                <p>{description}<br />
                    <a href={`/imageFullSize/${img.split('/').join('-')}`} title='' data-gallery>Вижте повече</a>
                </p>
            </figcaption>
        </figure>
    );
}

export default WorkCards;