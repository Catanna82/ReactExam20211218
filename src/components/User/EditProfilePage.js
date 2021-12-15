import { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import Logo from '../Logo/Logo';
import './editProfilePageStyle.css';
import './adminProfileStyle.css';

const EditProfilePage = ({
    name,
    email,
    phone,
    address,
    updateUserData
}) => {
    const { user: {
        userID
    } } = useContext(AuthContext);

    const [userData, setUserData] = useState({
        name,
        email,
        phone,
        address
    });

    const updateUserDataHandler = (e) => {
        e.preventDefault();

        updateUserData({
            ...userData,
            _id: userID
        });
    };

    const changeUserData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    return userID ? (
        <>
            <Logo />
            <section id='edit-page' className='auth-container'>
                <form id='edit-form' action='POST' onSubmit={updateUserDataHandler}>
                    <div className='edit-container'>

                        <h4 className='edit-title'>Редакция на профила</h4>
                        <label className='edit-label' htmlFor='username'>Име:</label>
                        <input className='edit-input' type='text' id='name' name='name' onChange={changeUserData} value={userData.name} />

                        <label className='edit-label' htmlFor='email'>Електронна поща:</label>
                        <input className='edit-input' type='text' id='email' name='email' onChange={changeUserData} value={userData.email} />

                        <label className='edit-label' htmlFor='phone'>Телефон:</label>
                        <input className='edit-input' type='text' id='phone' name='phone' onChange={changeUserData} value={userData.phone} />

                        <label className='edit-label' htmlFor='address'>Адрес:</label>
                        <input className='edit-input' type='text' name='address' id='address' onChange={changeUserData} value={userData.address} />

                        {/* <label className='edit-label' htmlFor='imageUrl'>Профилна снимка:</label>
                        <label htmlFor='imgageUrl' className='edit-label'>
                            <img src={img} className='rounded-circle' width='150' alt='user-img' />
                        </label>
                        <form className='edit-post' method='POST'>
                            <input className='user-img' type='file' id='image' name='image' />
                        </form> */}

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

export default EditProfilePage;