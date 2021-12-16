import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import './login.css';
import Logo from '../Logo/Logo';
import AuthContext from '../../contexts/AuthContext';

const Login = ({ postFetch}) => {
    let historyHook = useHistory();
    const { login } = useContext(AuthContext);
    const initialState = {
        email: '',
        password: '',
        regEmail: '',
        regPassword: '',
        regName: ''
    };
    const [isSignUp, setState] = useState(true);
    const [input, setInput] = useState(initialState);
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
    const onSignUpHandler = (e) => {
        e.preventDefault();
        console.log(input);
        const { regEmail, regPassword, regName } = input;
        const data = {
            email: regEmail,
            password: regPassword,
            name: regName
        };
        postFetch('/api/SaveUser', data);
        historyHook.push('/');
    }
    const onSignInHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        const { email, password } = input;
        const data = {
            email,
            password
        };
        const userData = await postFetch('/api/login', data);
        console.log(userData);
        login(userData);
        historyHook.push('/');
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
                    </label>
                    <label>
                        <span>Парола</span>
                        <input className='login-input' onChange={onChangeHandler} name='password' type='password' value={input.password} />
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
                        </label>
                        <label>
                            <span>Електронна поща</span>
                            <input className='login-input' onChange={onChangeHandler} name='regEmail' type='email' />
                        </label>
                        <label>
                            <span>Парола</span>
                            <input className='login-input' onChange={onChangeHandler} name='regPassword' type='password' />
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