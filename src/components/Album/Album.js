import AlbumCard from './AlbumCard';
import './album.css';
import { Redirect } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const Album = () => {
    const { user: {
        userID
    }} = useContext(AuthContext);
    return userID
        ? (
        <div id='album' className='album-container'>

            <div id='myCarousel' className='carousel slide banner-slider animated bounceInDown' data-ride='carousel'>
                <div div className='carousel-inner card'>
                    <AlbumCard
                        title=''
                        img='/images/slide1.jpg'
                        className='item active img-cont'
                    />
                    <AlbumCard
                        title=''
                        img='/images/slide2.jpg'
                        className='item img-cont'
                    />
                    <AlbumCard
                        title=''
                        img='/images/slide3.jpg'
                        className='item img-cont'
                    />
                    <AlbumCard
                        title=''
                        img='/images/slide4.jpg'
                        className='item img-cont'
                    />
                    <AlbumCard
                        title=''
                        img='/images/slide5.jpg'
                        className='item img-cont'
                    />
                </div>
                <a className='left carousel-control' href='#myCarousel' data-slide='prev'><span className='glyphicon-chevron-left'><i className='fa fa-angle-left'></i></span></a>
                <a className='right carousel-control' href='#myCarousel' data-slide='next'><span className='glyphicon-chevron-right'><i className='fa fa-angle-right'></i></span></a>
            </div>
        </div>
    )
    : <Redirect to='/' />
}

export default Album;