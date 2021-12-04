import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import './albumPreviewStyle.css';


const AlbumPreview = () => {
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
                        <img className='mainImg' src={imgs[index]} alt='not found' />
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

    return (
        <div className='slide-show'>
            <h1 className='slide-show-title'>SlideShow</h1>
            <Slideshow
                imgs={[
                    'https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=800',
                    'https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                    'https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                    'https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                    'https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                    'https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                    'https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500',
                ]}
            />
        </div>
    );
}

export default AlbumPreview;