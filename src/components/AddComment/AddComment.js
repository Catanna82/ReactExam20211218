import { format as formatDate } from 'date-fns'
import { useEffect, useContext, useState } from 'react';
import Logo from '../Logo/Logo';
import './addComment.css';
import AddCommentRow from './AddCommentRow';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';

const AddComment = ({ getFetch, postFetch }) => {
    const [input, setInput] = useState({
        msg: '',
    });
    const load = async () => {
        const data = await getFetch('/api/loadComment');
        setComments(data);
    }
    const [comments, setComments] = useState([]);

    useEffect(() => load(), []);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setInput(oldInput => {
            return {
                ...oldInput,
                [name]: value
            };
        });
    };
    const onClickHandler = async (e) => {
        e.preventDefault();
        await postFetch('/api/saveComment', { ...input, userID, date: Date.now() });
        load();
        setInput({ msg: '' });
    };
    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        <>
            <Logo />
            <section className='add-comp-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5 col-md-6 col-12 pb-4 comment-flex'>
                            {comments.map(({ date, msg, userID, _id }, i) => {
                                const style = (i % 2 === 0 && 'add-comment mt-4 text-justify float-left') ||
                                    'text-justify add-darker mt-4 float-right';
                                return (
                                    < AddCommentRow
                                        key={_id}
                                        className={style}
                                        name={userID}
                                        img='https://i.imgur.com/yTFUilP.jpg'
                                        date={formatDate(new Date(date), 'dd/MM/yyyy')}
                                        text={msg}
                                    />
                                );
                            })}
                        </div>
                        <div className='col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4'>
                            <form id='algin-form' className='comment-form'>
                                <div className='form-group'>
                                    <h4 className='comment-h4 comment-h4-center'>Оставете коментар</h4>
                                    <label className='comment-form-label' htmlFor='message'>Коментар</label>
                                    <textarea onChange={onChangeHandler} value={input.msg} name='msg' id='' cols='30' rows='5' className='form-control text-comment' />
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