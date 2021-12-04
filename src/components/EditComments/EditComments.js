import { useState } from 'react';
import Logo from '../Logo/Logo';
import './editComments.css';

const EditComments = ({ postFetch }) => {
    const [input, setInput] = useState({
        msg: '',
        name: '',
        email: ''
    });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setInput(oldInput => {
            return {
                ...oldInput,
                [name]: value
            };
        });
    };
    const onClickHandler = (e) => {
        e.preventDefault();
        postFetch('/api/saveComment', input);
    };
    return (
        <>
            <Logo />
            <section className='comp-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4'>
                            <form id='algin-form' className='comment-form'>
                                <div className='form-group'>
                                    <h4 className='comment-h4 comment-h4-center'>Оставете коментар</h4>
                                    <label className='comment-form-label' htmlFor='message'>Коментар</label>
                                    <textarea onChange={onChangeHandler} value={input.msg} name='msg' id='' cols='30' rows='5' className='form-control text-comment' />
                                </div>
                                <div className='form-group'>
                                    <label className='comment-form-label' htmlFor='name'>Име</label>
                                    <input onChange={onChangeHandler} value={input.name} type='text' name='name' id='fullname' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label className='comment-form-label' htmlFor='email'>Електронна поща</label> <input onChange={onChangeHandler} value={input.email} type='text' name='email' id='email' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <button onClick={onClickHandler} type='button' id='post' className='comment-btn'>Post Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditComments;