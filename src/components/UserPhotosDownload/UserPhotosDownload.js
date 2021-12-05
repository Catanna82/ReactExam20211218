import { useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from '../Logo/Logo';
import DownloadImg from '../DownloadImg/DownloadImg';
import './userPhotosDownloadStyles.css'

const UserPhotos = () => {
    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        <>
            <Logo />
            <div className='img-container'>
            <DownloadImg />
            </div>
        </>
    )
    : <Redirect to='/' />
}

export default UserPhotos;