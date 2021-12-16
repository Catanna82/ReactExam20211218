import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import EditProfilePage from './EditProfilePage';
import Logo from '../Logo/Logo';
import './userStyle.css'

const User = ({ getFetch, postFetch }) => {
    const history = useHistory();
    const { user: {
        userID,
        isAdmin
    }, logout } = useContext(AuthContext);

    const load = async () => {
        const data = await getFetch(`/api/loadUsers/${userID}`);
        setUserData(data);
    }
    const [userData, setUserData] = useState({});
    const [editMode, setEditMode] = useState(false);
    useEffect(() => load(), []);

    const updateUserData = async (data) => {
        await postFetch('/api/UpdateUser', data);
        setEditMode(false);
        load();
    }

    const deleteUserProfile = async () => {
        await postFetch('/api/deleteUser', { userID });
        logout();
        history.push('/');
    }

    return userID ? (
        editMode
            ? <EditProfilePage
                name={userData.name}
                email={userData.email}
                phone={userData.phone}
                address={userData.address}
                updateUserData={updateUserData}
            />
            : <>
                <Logo />
                <div className='user-page'>
                    <main className='admin-page-main'>
                        <div className='container user-profile-container'>
                            <div className='user-profile-main'>
                                <div className='user-profile-main-topbar'>
                                    <a className='user-profile-main-topbar-a' href='/' onClick={logout}>Изход</a>
                                    {userID && isAdmin && <a className='user-profile-main-topbar-a' href='/messages' ><i className='far fa-envelope header-i'></i></a>}
                                </div>
                            </div>
                            <div className='user-profile-row'>
                                <div className='col-md-4 mt-1'>
                                    <div className='user-profile-card text-center user-profile-sidebar'>
                                        <div className='user-profile-card-body'>
                                            <img src='/images/profile.jpg' className='rounded-circle' width='150' alt='user-img' />
                                            <div className='mt-3'>
                                                <h3>{userData.name}</h3>
                                                <a className='user-profile-sidebar-a' href='#editProfile' onClick={() => setEditMode(true)}>Редакция на профила</a>
                                                {!isAdmin && <a className='user-profile-sidebar-a' href='#deleteProfile' onClick={deleteUserProfile}>Изтриване на профила</a>}
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
                                                <p className='users-data-p'>{userData.name}</p>
                                            </div>
                                            <div className='user-profile-row'>
                                                <span className='users-data-span'>Електронна поща: </span>
                                                <p className='users-data-p'>{userData.email}</p>
                                            </div>
                                            <div className='user-profile-row'>
                                                <span className='users-data-span'>Телефон: </span>
                                                <p className='users-data-p'>{userData.phone}</p>
                                            </div>
                                            <div className='user-profile-row'>
                                                <span className='users-data-span'>Адрес: </span>
                                                <p className='users-data-p'>{userData.address}</p>
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
                            {!isAdmin && <nav>
                                <ul type='square'>
                                    <li className='square-li'>
                                        <a href='/myAlbums'>Моите албуми</a>
                                    </li>
                                </ul>
                            </nav>}
                            {isAdmin && <nav>
                                <ul type='square'>
                                    <li className='square-li'>
                                        <a href='/addAlbum'>Добави албум</a>
                                    </li>
                                    <li className='square-li'>
                                        <a href='/editAlbum'>Редактирай албум</a>
                                    </li>
                                </ul>
                            </nav>}
                        </section>
                        <section>
                            <h4 className='admin-page-aside-aside-h3'>Коментари</h4>
                            {!isAdmin && <nav>
                                <ul type='square'>
                                    <li className='square-li'>
                                        <a href='/myComments'>Моите коментари</a>
                                    </li>
                                </ul>
                            </nav>}
                            {isAdmin && <nav>
                                <ul type='square'>
                                    <li className='square-li'>
                                        <a href='/myComments'>Моите коментари</a>
                                    </li>
                                    <li className='square-li'>
                                        <a href='/pendingComments'>Чакащи одобрение</a>
                                    </li>
                                    <li className='square-li'>
                                        <a href='/rejectedComments'>Отхвърлени коментари</a>
                                    </li>
                                </ul>
                            </nav>}
                        </section>
                    </aside>
                </div>
            </>
    )
        : <Redirect to='/' />
}

export default User;