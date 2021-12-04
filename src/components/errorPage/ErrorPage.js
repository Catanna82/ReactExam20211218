import './errorPage.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';

const ErrorPage = ({
    children
}) => {
    return (
        <div className='body'>
        <Logo />
        <section id='catalog-page' className='error-page'>
            <img className='error-img' src='images/404-page-1.jpg' alt='banner' />
            {children && <p className='no-img'>{children}</p>}
        </section>
        <Footer />
        </div>
    );
}

export default ErrorPage;