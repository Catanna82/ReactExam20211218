import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import './headerStyle.css';
export default function Header() {
    const { user: {
        userID,
        isAdmin
    }, logout } = useContext(AuthContext);


    return (
        <div className='navbar-wrapper'>
            <div className='container'>
                <div className='navbar navbar-inverse navbar-fixed-top' role='navigation' id='top-nav'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <Link to='/'><img src='images/logo-removebg-preview.png' className='logo' alt='logo' /></Link>
                            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='.navbar-collapse'>
                                <span className='sr-only'>Toggle navigation</span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </button>
                        </div>
                        <div className='navbar-collapse collapse'>
                            <ul className='nav navbar-nav navbar-right'>
                                {!userID && < li ><Link to='/login' >Вход</Link></li>}
                                {userID && < li ><Link to='/addComments' >Коментари</Link></li>}
                                {userID && < li ><Link to='/allAlbums' >Албуми</Link></li>}
                               
                                {userID && < li ><Link to='/user' >Профил</Link></li>}
                                {userID && < li ><Link to='/' onClick={logout}>Изход</Link></li>}
                            </ul>
                            <ul className='nav navbar-nav navbar-right scroll'>
                                <li className='active'><Link to='#home'>Начало</Link></li>
                                <li ><Link to='#about'>За мен</Link></li>
                                <li ><Link to='#works'>Проекти</Link></li>
                                <li ><Link to='#partners'>Партньори</Link></li>
                                <li ><Link to='#contact'>Контакти</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}