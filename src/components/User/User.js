import { useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from '../Logo/Logo';
import './userStyle.css'

const User = () => {
    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        <>
            <Logo />
            <div className='user-page'>
                <main className='admin-page-main'>
                    <div className='container user-profile-container'>
                        <div className='user-profile-main'>
                            <div className='user-profile-main-topbar'>
                                <a className='user-profile-main-topbar-a' href='/'>Изход</a>
                            </div>
                        </div>
                        <div className='user-profile-row'>
                            <div className='col-md-4 mt-1'>
                                <div className='user-profile-card text-center user-profile-sidebar'>
                                    <div className='user-profile-card-body'>
                                        <img src='images/team/team3.jpg' className='rounded-circle' width='150' alt='user-img' />
                                        <div className='mt-3'>
                                            <h3>Пламена Тодорова</h3>
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
                                            <p className='users-data-p'>Пламена Тодорова</p>
                                        </div>
                                        <div className='user-profile-row'>
                                            <span className='users-data-span'>Електронна поща: </span>
                                            <p className='users-data-p'>plams@studio.bg</p>
                                        </div>
                                        <div className='user-profile-row'>
                                            <span className='users-data-span'>Телефон: </span>
                                            <p className='users-data-p'>+359878555522</p>
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
                </main>
                <aside className='admin-page-aside'>
                    <section>
                        <h4 className='admin-page-aside-aside-h3'>Албуми</h4>
                        <nav>
                            <ul type='square'>
                                <li className='square-li'>
                                <a href='/albums'>Моите албуми</a>
                                </li>
                                <li className='square-li'>
                                    <a href='/userPhotosDownload'>Изтегли снимки</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <h4 className='admin-page-aside-aside-h3'>Коментари</h4>
                        <nav>
                            <ul type='square'>
                                <li className='square-li'>
                                    <a href='/myComments'>Моите коментари</a>
                                </li>
                                <li className='square-li'>
                                    <a href='/editComment'>Редактиране на коментари</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </aside>
            </div>
        </>
    )
    : <Redirect to='/' />
}

export default User;