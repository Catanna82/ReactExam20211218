import { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    const [isSignUp, setState] = useState(true);

    return (
        <div className='log'>
            <div className='navbar-wrapper'>
                <div className='container'>
                    <div className='navbar navbar-inverse navbar-fixed-top' role='navigation' id='top-nav'>
                        <div className='container'>
                            <div className='navbar-header'>
                                <Link to='/'><img src='images/logo-removebg-preview.png' alt='logo' /></Link>
                                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='.navbar-collapse'>
                                    <span className='sr-only'>Toggle navigation</span>
                                    <span className='icon-bar'></span>
                                    <span className='icon-bar'></span>
                                    <span className='icon-bar'></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isSignUp ? 'cont' : 'cont s--signup'}>
                <div className={'form sign-in'}>
                    <h2>Welcome back,</h2>
                    <label>
                        <span>Email</span>
                        <input type='email' />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type='password' />
                    </label>
                    <p className={'forgot-pass'}>Forgot password?</p>
                    <button type='button' className={'submit'}>Sign In</button>
                    <button type='button' className={'fb-btn'}>Connect with <span>facebook</span></button>
                </div>
                <div className={'sub-cont s--signup'}>
                    <div className={'img'}>
                        <div className={'img__text m--up'}>
                            <h2>New here?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                        </div>
                        <div className={'img__text m--in'}>
                            <h2>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div className={'img__btn'} onClick={(e) => setState(!isSignUp)}>
                            <span className={'m--up'}>Sign Up</span>
                            <span className={'m--in'}>Sign In</span>
                        </div>
                    </div>
                    <div className={'form sign-up s--signup'}>
                        <h2>Time to feel like home,</h2>
                        <label>
                            <span>Name</span>
                            <input type='text' />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type='email' />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type='password' />
                        </label>
                        <button type='button' className={'submit'} >Sign Up</button>
                        <button type='button' className={'fb-btn'} >Join with <span>facebook</span></button>
                    </div>
                </div>
            </div>

            {/* <a href='https://dribbble.com/shots/3306190-Login-Registration-form' target='_blank' className={'icon-link'}>
                <img src='http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png' />
            </a>
            <a href='https://twitter.com/NikolayTalanov' target='_blank' className={'icon-link icon-link--twitter'}>
                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png' />
            </a> */}
        </div>
    );
}

export default Login;