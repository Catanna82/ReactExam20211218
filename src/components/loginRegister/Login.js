import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import './login.css';
import Logo from '../Logo/Logo';
import AuthContext from '../../contexts/AuthContext';

const Login = ({ postFetch }) => {
    let historyHook = useHistory();
    const { login } = useContext(AuthContext);
    const initialState = {
        email: '',
        password: '',
        regEmail: '',
        regPassword: '',
        regName: ''
    };
    const initialLoginState = {
        email: '',
        password: ''
    };
    const initialRegisterState = {
        regEmail: '',
        regPassword: '',
        regName: ''
    };
    const [isSignUp, setState] = useState(true);
    const [input, setInput] = useState(initialState);
    const [errors, setErrors] = useState({
        ...initialLoginState,
        ...initialRegisterState
    });

    const changeView = () => {
        setState(!isSignUp);
        setInput(initialState);
    };
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setInput(oldInput => {
            return {
                ...oldInput,
                [name]: value
            };
        });
    };
    const onSignUpHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        const { regEmail, regPassword, regName } = input;
        const catchErrors = {};
        const removeErrors = {};

        if (!regName) {
            catchErrors.regName = 'Потребителското име е задължително!';
        } else {
            removeErrors.regName = '';
        }
        if (!regPassword) {
            catchErrors.regPassword = 'Паролата е задължителна!';
        } else if (regPassword.length < 6) {
            catchErrors.regPassword = 'Паролата трябва да е минимум 6 символа!';
        } else {
            removeErrors.regPassword = '';
        }
        if (!regEmail) {
            catchErrors.regEmail = 'Въведете електронна поща!';
        } else if (!regEmail.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
            catchErrors.regEmail = 'Въведете валидна електронна поща!';
        } else {
            removeErrors.regEmail = '';
        }

        if (Object.keys(catchErrors).length > 0) {
            setErrors({
                ...errors,
                ...catchErrors,
                ...removeErrors
            })
        } else {
            const data = {
                email: regEmail,
                password: regPassword,
                name: regName
            };
            const registerFetch = await postFetch('/api/SaveUser', data);
            if (registerFetch.regEmail) {
                setErrors({
                    ...initialLoginState,
                    ...initialRegisterState,
                    ...registerFetch
                })
            } else {
                historyHook.push('/');
            }
        }
    }
    const onSignInHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        const { email, password } = input;
        const catchErrors = {};
        const removeErrors = {};
        if (!password) {
            catchErrors.password = 'Паролата е задължителна!';
        } else {
            removeErrors.password = '';
        }
        if (!email) {
            catchErrors.email = 'Въведете електронна поща!';
        } else {
            removeErrors.email = '';
        }
        if (Object.keys(catchErrors).length > 0) {
            setErrors({
                ...errors,
                ...catchErrors,
                ...removeErrors
            })
        } else {
            const data = {
                email,
                password
            };
            const userData = await postFetch('/api/login', data);
            if (userData.password) {
                setErrors({
                    ...initialLoginState,
                    ...initialRegisterState,
                    ...userData
                })
            } else {
                login(userData);
                historyHook.push('/');
            }
        }
    }

    return (
        <div className='log'>
            <Logo />
            <div className={isSignUp ? 'cont' : 'cont s--signup'}>
                <div className={'form sign-in'}>
                    <h2>Добре дошъл отново, {input.email}</h2>
                    <label>
                        <span>Електронна поща</span>
                        <input className='login-input' onChange={onChangeHandler} name='email' type='email' value={input.email} />
                        <div className='error'>{errors.email}</div>
                    </label>
                    <label>
                        <span>Парола</span>
                        <input className='login-input' onChange={onChangeHandler} name='password' type='password' value={input.password} />
                        <div className='error'>{errors.password}</div>
                    </label>
                    {/* <p className={'forgot-pass'}>Забравена парола?</p> */}
                    <button type='button' onClick={onSignInHandler} className={'submit'}>Вход</button>
                    {/* <button type='button' className={'fb-btn'}>Влез с <span>facebook</span></button> */}
                </div>
                <div className={'sub-cont s--signup'}>
                    <div className={'img'}>
                        <div className={'img__text m--up'}>
                            <h2>Нов ли си тук?</h2>
                            <p>Регистрирай се и се наслади на красотата видяна през нашите очи!</p>
                        </div>
                        <div className={'img__text m--in'}>
                            <h2>Ако си един от нас?</h2>
                            <p>Ако вече имаш акаунт, просто влез. Очакваме те!</p>
                        </div>
                        <div className={'img__btn'} onClick={changeView}>
                            <span className={'m--up'}>Регистрация</span>
                            <span className={'m--in'}>Вход</span>
                        </div>
                    </div>
                    <div className={'form sign-up s--signup'}>
                        <h2>Време е да се почувствате като у дома си,</h2>
                        <label>
                            <span>Име</span>
                            <input className='login-input' onChange={onChangeHandler} name='regName' type='text' />
                            <div className='error'>{errors.regName}</div>
                        </label>
                        <label>
                            <span>Електронна поща</span>
                            <input className='login-input' onChange={onChangeHandler} name='regEmail' type='email' />
                            <div className='error'>{errors.regEmail}</div>
                        </label>
                        <label>
                            <span>Парола</span>
                            <input className='login-input' onChange={onChangeHandler} name='regPassword' type='password' />
                            <div className='error'>{errors.regPassword}</div>
                        </label>
                        <button type='button' onClick={onSignUpHandler} className={'submit'} >Регистрация</button>
                        {/* <button type='button' className={'fb-btn'} >Присъедини се с <span>facebook</span></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;