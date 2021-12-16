import { useParams } from "react-router-dom";
import './portfolioImgStyle.css';
const PortfolioImg = () => {

    const {img} = useParams();
    const path = img.split('-').join('/');
    return (
        <a href='/' title='' data-gallery>
            <img className='portfolio-img' src={path} alt='img01' />
        </a>
    );
};

export default PortfolioImg;