import { useHistory } from 'react-router-dom';

const WorkCards = ({img, title, description,}) => {
    let historyHook = useHistory();
    const returnHome = (e) => {
        e.preventDefault();
        historyHook.push('/');
    }
    return (
        <figure className='effect-oscar  wowload fadeInUp'>
                <img src={img} alt='img01' onClick={returnHome} />
                <figcaption>
                    <h2>{title}</h2>
                    <p>{description}<br />
                        <a href={img} title='' data-gallery>Вижте повече</a></p>
                </figcaption>
            </figure>
    );
}

export default WorkCards;