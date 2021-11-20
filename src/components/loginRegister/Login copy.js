import { useState } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
const Login = () => {
    // document.querySelector('.img__btn').addEventListener('click', function () {
    //     document.querySelector('.cont').classList.toggle('s--signup');
    // });
    const [isSignUp, setState] = useState(true);
    function toggleSign() {
        // e.preventDefault();
        console.log(123123);
        setState(!isSignUp);
    };

    return (
        <>
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
            <div className={isSignUp ? styles['cont s--signup'] : styles['cont']}>
                <div className={styles['form sign-in']}>
                    <h2>Welcome back,</h2>
                    <label>
                        <span>Email</span>
                        <input type='email' />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type='password' />
                    </label>
                    <p className={styles['forgot-pass']}>Forgot password?</p>
                    <button type='button' className={styles.submit}>Sign In</button>
                    <button type='button' className={styles['fb-btn']}>Connect with <span>facebook</span></button>
                </div>
                <div className={styles['sub-cont']}>
                    <div className={styles.img}>
                        <div className={styles['img__text m--up']}>
                            <h2>New here?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                        </div>
                        <div className={styles['img__text m--in']}>
                            <h2>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div className={styles['img__btn']} onClick={(e) => toggleSign(e)}>
                            <span className={styles['m--up']}>Sign Up</span>
                            <span className={styles['m--in']}>Sign In</span>
                        </div>
                    </div>
                    <div className={styles['form sign-up']}>
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
                        <button type='button' className={styles.submit} >Sign Up</button>
                        <button type='button' className={styles['fb-btn']} >Join with <span>facebook</span></button>
                    </div>
                </div>
            </div>

            <a href='https://dribbble.com/shots/3306190-Login-Registration-form' target='_blank' className={styles['icon-link']}>
                <img src='http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png' />
            </a>
            <a href='https://twitter.com/NikolayTalanov' target='_blank' className={styles['icon-link icon-link--twitter']}>
                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png' />
            </a>
        </>
    );
}

export default Login;