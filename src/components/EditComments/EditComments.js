import { useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import '../Comments/myComment.css';

const EditComments = ({ text, commentID, onClickHandler, setEditComment }) => {
    const onChangeHandler = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setEditComment({
            text: value,
            commentID
        });
    };

    const onEditHandler = (e) => {
        e.preventDefault();
        onClickHandler();
    };
    const { user: {
        userID
    } } = useContext(AuthContext);
    return userID ? (
        <div className='col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4 my-comment-form'>
            <form id='algin-form' className='my-comment-form'>
                <div className='form-group'>
                    <h4 className='my-comment-h4 my-comment-h4-center'>Редакция на коментар</h4>
                    <label className='my-comment-form-label' htmlFor='message'>Коментар</label>
                    <textarea onChange={onChangeHandler} value={text} name='msg' id='' cols='30' rows='5' className='form-control text-comment'>{text}</textarea>
                </div>
                <div className='form-group'>
                    <button onClick={onEditHandler} type='button' id='post' className='comment-btn'>Публикувай</button>
                </div>
            </form>
        </div>
    )
        : <Redirect to='/' />
}

export default EditComments;