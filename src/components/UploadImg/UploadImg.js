import { Redirect } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import './uploadImgStyle.css';

const UploadImg = ({ images }) => {
    const { user: {
        isAdmin
    } } = useContext(AuthContext);
    return isAdmin ? (
        <section className='admin-upload-gallery'>
            <ul className='admin-upload-gallery-ul'>

                {images.map((img, i) => (
                    <li className='admin-upload-gallery-li' key={i}>
                        <img className='admin-upload-gallery-img' src={img} alt='' />
                    </li>
                ))}

            </ul>
        </section>
    )
        : <Redirect to='/' />
}
export default UploadImg;