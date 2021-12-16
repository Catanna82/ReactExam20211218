import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import './albumPreviewStyle.css';
import { useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Loader from '../Common/Loader/Loader';

const AlbumPreview = ({ albumID, getFetch }) => {

    const [album, setAlbum] = useState([]);

    const albumView = async () => {
        const album = await getFetch(`/api/loadAlbums/${albumID}`);
        setAlbum(album);
    }

    useEffect(() => {
        albumView();
    }, [])

    const Thumbnail = ({ arr, image, index }) => {
        return (<div className='tumbnail'>
            {
                arr.map((imgsrc, i) => (
                    <img
                        key={i}
                        height='50'
                        src={imgsrc}
                        onClick={() => image(i)}
                        className={index === i ? 'img-active' : ''}
                        alt='not found'
                    />
                ))
            }
        </div>)
    }

    const Slideshow = ({ imgs }) => {
        const [index, setIndex] = useState(0)

        useEffect(() => {
            setIndex(0)
        }, [])


        const next = () => {
            if (index === imgs.length - 1) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
        }
        const prev = () => {
            if (index === 0) {
                setIndex(imgs.length - 1)
            } else {
                setIndex(index - 1)
            }
        }

        return (
            <>
                <Logo />
                <div className='slideshow'>
                    <div className='mainImg-container'>
                        <a href={imgs[index]} download={index}>
                            <img className='mainImg' src={imgs[index]} alt='not found' />
                        </a>
                    </div>
                    <div className='slideshow-actions'>
                        <button className='slideshow-button' onClick={prev}>👈</button>
                        <button className='slideshow-button' onClick={next}>👉</button>
                    </div>
                    <Thumbnail arr={imgs} image={setIndex} index={index} />
                </div>
            </>
        )
    }

    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ?
        album.length > 0
            ? (
                <div className='slide-show'>
                    <h1 className='slide-show-title'>SlideShow</h1>
                    <Slideshow
                        imgs={album}
                    />
                </div>
            )
            : <Loader />
        : <Redirect to='/' />
}

export default AlbumPreview;