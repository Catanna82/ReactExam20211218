import { useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from '../Logo/Logo';
import './userProfileStyle.css';
const UserProfilPage = () => {
    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        <>
            <Logo />
            <div className='container admin-user-profile-container'>
                <div className='user-profile-main'>
                    <div className='user-profile-main-topbar'>
                        <a className='user-profile-main-topbar-a' href='/logout'>Изход</a>
                        <a className='user-profile-main-topbar-a' href='/albums'>Моите албуми</a>
                    </div>
                </div>
                <div className='user-profile-row'>
                    <div className='col-md-4 mt-1'>
                        <div className='user-profile-card text-center user-profile-sidebar'>
                            <div className='user-profile-card-body'>
                                <img src='images/team/team1.jpg' className='rounded-circle' width='150' alt='user-img' />
                                <div className='mt-3'>
                                    <h3>Жан Тодоров</h3>
                                    <a className='user-profile-sidebar-a' href='/edit'>Редакция на профила</a>
                                    <a className='user-profile-sidebar-a' href='/delete/'>Изтриване на профила</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 mt-1'>
                        <div className='card mb-3 content'>
                            <p className='title-p'>За мен</p>
                            <div className='user-profile-card-body'>
                                <div className='user-profile-row'>
                                    <span className='users-data-span'>Име: </span>
                                    <p className='users-data-p'>Жан Тодоров</p>
                                </div>
                                <div className='user-profile-row'>
                                    <span className='users-data-span'>Електронна поща: </span>
                                    <p className='users-data-p'>jan@studio.bg</p>
                                </div>
                                <div className='user-profile-row'>
                                    <span className='users-data-span'>Телефон: </span>
                                    <p className='users-data-p'>+359859555565</p>
                                </div>
                                <div className='user-profile-row'>
                                    <span className='users-data-span'>Адрес: </span>
                                    <p className='users-data-p'>София, Люлин</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    : <Redirect to='/' />
}

export default UserProfilPage;