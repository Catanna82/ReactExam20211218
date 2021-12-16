import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import '../Header/headerStyle.css';

const Logo = () => {
    const { user: {
        userID
    }, logout } = useContext(AuthContext);
    return (
        <div className='navbar-wrapper'>
            <div className='container'>
                <div className='navbar navbar-inverse navbar-fixed-top' role='navigation' id='top-nav'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <Link to='/'><img src='images/logo-removebg-preview.png' alt='logo' /></Link>
                         </div>
                         <div className='navbar-collapse collapse'>
                            <ul className='nav navbar-nav navbar-right'>
                                {!userID && < li ><Link to='/login' >Вход</Link></li>}
                                {userID && < li ><Link to='/' >Начало</Link></li>}
                                {userID && < li ><Link to='/addComments' >Коментари</Link></li>}
                                {userID && < li ><Link to='/allAlbums' >Албуми</Link></li>}
                                {userID && < li ><Link to='/user' >Профил</Link></li>}
                                {userID && < li ><Link to='/' onClick={logout}>Изход</Link></li>}
                            </ul>
                            </div>
                     </div>
                 </div>
             </div>
        </div>
    );
}

export default Logo;