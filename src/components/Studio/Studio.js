import Logo from '../Logo/Logo';
import style from './studioStyle.module.css';


const Studio = () => {
    return (
        <>
            <Logo />
            <div className={style['studio-container']}>
                <h2 className={style['studio-container-h2']}>За вашите студийни фотосесии очаквайте скоро....</h2>
                <article className={style['studio-container-img']}>
                    <img className={style['studio-img']} src='/images/studio/Studio1.png' alt='' />
                </article>
                <article className={style['studio-container-img']}>
                    <img className={style['studio-img']} src='/images/studio/Studio2.jpg' alt='' />
                </article>
                <article className={style['studio-container-img']}>
                    <img className={style['studio-img']} src='/images/studio/Studio3.jpg' alt='' />
                </article>
                <article className={style['studio-container-img']}>
                    <img className={style['studio-img']} src='/images/studio/Studio4.jpg' alt='' />
                </article>
                <article className={style['studio-container-img']}>
                    <img className={style['studio-img']} src='/images/studio/Studio5.jpg' alt='' />
                </article>
            </div>
        </>
    );
}

export default Studio;