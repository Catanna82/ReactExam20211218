import Logo from '../Logo/Logo';
import DownloadImg from '../DownloadImg/DownloadImg';
import './userPhotosDownloadStyles.css'

const UserPhotos = () => {
    return (
        <>
            <Logo />
            <div className='img-container'>
            <DownloadImg />
            </div>
        </>
    );
}

export default UserPhotos;