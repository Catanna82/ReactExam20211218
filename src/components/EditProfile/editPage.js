import { useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from '../Logo/Logo';
import './editPageStyle.css';
const EditPage = () => {
    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        <>
            <Logo />
            <section id='edit-page' className='auth-container'>
                <form id='edit-form'>
                    <div className='edit-container'>

                        <h4 className='edit-title'>Редакция на профила</h4>
                        <label className='edit-label' htmlFor='username'>Име:</label>
                        <input className='edit-input' type='nusername' id='nusername' name='nusername' />

                        <label className='edit-label' htmlFor='email'>Електронна поща:</label>
                        <input className='edit-input' type='email' id='email' name='email' />

                        <label className='edit-label' htmlFor='phone'>Телефон:</label>
                        <input className='edit-input' type='phone' id='phone' name='phone' />

                        <label className='edit-label' htmlFor='adress'>Адрес:</label>
                        <input className='edit-input' name='adress' id='adress'></input>

                        <label className='edit-label' htmlFor='imageUrl'>Профилна снимка:</label>
                        <form className='edit-post' method='POST'>
                            <input className='user-img' type='file' id='images' name='images' multiple />
                        </form>

                        <>
                            <button className='btn-submit' type='submit' value='Запази'>Запази</button>
                        </>
                    </div>
                </form>
            </section>
        </>
    )
        : <Redirect to='/' />
}

export default EditPage;