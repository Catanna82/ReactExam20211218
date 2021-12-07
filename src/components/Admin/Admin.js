import Logo from '../Logo/Logo';
import UploadImg from '../UploadImg/UploadImg';
import './stylesAdmin.css';
import { Redirect } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const Admin = () => {

    const { user: {
        isAdmin
    }} = useContext(AuthContext);
    return isAdmin
        ? (
            <>
                <Logo />
                <div className='admin-page'>
                    <main className='admin-page-main'>
                        <div className='admin-page-main-container-upload'>
                            <div id='admin-form' className='admin' action='' method='POST'>
                                <div className='flex'>
                                    <div className='flex'>
                                        <p>
                                            Име на албума:
                                            <input className='album-name-input' type='text' name='albumName' id='albumName' />
                                        </p>
                                    </div>
                                    <form id='upload-form' className='admin' method='POST'>
                                        <input className='admin-add-img' type='file' id='images' name='images' multiple />
                                    </form>
                                    <div className='flex'>
                                        <p>
                                            Категория:
                                            <select name='category' id='category' className='admin-category'>
                                                <option value='Event'>Събития</option>
                                                <option value='Weddings'>Сватби</option>
                                                <option value='Portrait'>Портрети</option>
                                                <option value='Kids'>Деца</option>
                                                <option value='Vintage'>Винтидж</option>
                                                <option value='Nature'>Природа</option>
                                                <option value='Animals'>Животни</option>
                                                <option value='Flowers'>Растения</option>
                                                <option value='Bw'>Черно &amp; Бяло</option>
                                                <option value='rz'>Разни</option>
                                            </select>
                                        </p>
                                    </div>
                                    <button className='admin-btn' >Отхвърли</button>
                                    <button className='admin-btn' >Запази</button>
                                </div>
                            </div>
                        </div>
                    </main>
                    <aside className='admin-page-aside'>
                        <section>
                            <h3 className='admin-page-aside-aside-h3'>Албуми</h3>
                            <nav>
                                <ul type='square'>
                                    <li className='square-li'>
                                        <a href='/addalbum'>Добавяне на албум</a>
                                    </li>
                                    <li className='square-li'>
                                        <a href='/editAlbum'>Редактиране на албум</a>
                                    </li>
                                    <li className='square-li'>
                                        <a href='/lockAlbum'>Заключване на албум</a>
                                    </li>
                                    <li className='square-li'>
                                        <a href='/profile'>Профил</a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                        <section>
                            <h3 className='admin-page-aside-aside-h3'>Коментари</h3>
                            <nav>
                                <ul type='square'>
                                    <li className='square-li'>
                                        <a href='/allComments'>Всички коментари</a>
                                    </li>
                                    <li className='square-li'>
                                        <a href='/rejectComments'>Отхвърлени коментари</a>
                                    </li>
                                    <li className='square-li'>
                                        <a href='/aproveComments'>Одобри коментар</a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </aside>
                </div>
                <UploadImg />
            </>
        )
        : <Redirect to='/' />
}

export default Admin;