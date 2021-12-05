import { Redirect } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import './uploadImgStyle.css';

const UploadImg = () => {
    const { user: {
        isAdmin
    } } = useContext(AuthContext);
    return isAdmin ? (
        <section className='admin-upload-gallery'>
            <ul className='admin-upload-gallery-ul'>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/404-page-1.jpg' alt='' />
                </li>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/back1.jpg' alt='' />
                </li>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/back3.jpg' alt='' />
                </li>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/back4.jpg' alt='' />
                </li>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/back5.jpg' alt='' />
                </li>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/back2.jpg' alt='' />
                </li>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/back1_Plami.jpg' alt='' />
                </li>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/slide1.jpg' alt='' />
                </li>
                <li className='admin-upload-gallery-li'>
                    <img className='admin-upload-gallery-img' src='images/slide2.jpg' alt='' />
                </li>
            </ul>
        </section>
    )
        : <Redirect to='/' />
}
export default UploadImg;