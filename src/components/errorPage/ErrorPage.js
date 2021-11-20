import './errorPage.css';

const ErrorPage = ({
    children
}) => {
    return (
        <section id='catalog-page' className='error-page'>
            <img className='error-img' src='images/404-page-1.jpg' alt='banner' />
            {children && <p className='no-img'>{children}</p>}
        </section>
    );
}

export default ErrorPage;