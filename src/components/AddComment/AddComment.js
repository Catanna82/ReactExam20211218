import { useState } from 'react';
import Logo from '../Logo/Logo';
import './addComment.css';
import AddCommentRow from './AddCommentRow';
import { Redirect } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const AddComment = ({ postFetch }) => {
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
    const { user: {
        userID
    }} = useContext(AuthContext);
    return userID ? (
        <>
            <Logo />
            <section className='comp-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5 col-md-6 col-12 pb-4'>
                            <AddCommentRow
                                className='comment mt-4 text-justify float-left'
                                name='Krasimir Kolev'
                                img='https://i.imgur.com/yTFUilP.jpg'
                                date='- 20 October, 2018'
                                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                            />
                            <AddCommentRow
                                className='text-justify darker mt-4 float-right'
                                name='Anna Todorova'
                                img='https://i.imgur.com/CFpa3nK.jpg'
                                date='- 28 October, 2021'
                                text='Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?'
                            />
                            <AddCommentRow
                                className='comment mt-4 text-justify'
                                name='Jan Todorov'
                                img='https://i.imgur.com/yTFUilP.jpg'
                                date='- 20 October, 2018'
                                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                            />
                            <AddCommentRow
                                className='darker mt-4 text-justify'
                                name="Plamena Todorova"
                                img='https://i.imgur.com/CFpa3nK.jpg'
                                date='- 20 October, 2018'
                                text='Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?'
                            />
                        </div>
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
    )
    : <Redirect to='/' />
}

export default AddComment;