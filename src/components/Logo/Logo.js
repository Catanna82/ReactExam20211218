import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='navbar-wrapper'>
            <div className='container'>
                <div className='navbar navbar-inverse navbar-fixed-top' role='navigation' id='top-nav'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <Link to='/'><img src='images/logo-removebg-preview.png' alt='logo' /></Link>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
}

export default Logo;