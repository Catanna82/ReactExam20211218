import AuthContext from '../../../contexts/AuthContext';
import { useContext } from 'react';
import './addCommentBtnsStyle.css';

const AddCommentBtns = ({ setEditComment, text, commentID }) => {
    const { user: {
        userID,
        isAdmin
    } } = useContext(AuthContext);

    const editCommentHandler = (e) => {
        e.preventDefault();
        debugger;
        setEditComment({
            commentID: commentID,
            text: text
        })
    }

    const deleteHandler = (e) => {
        e.preventDefault();
    }
    const approveHandler = (e) => {
        e.preventDefault();
    }
    const rejectHandler = (e) => {
        e.preventDefault();
    }

    const UserBtn = () => {

        return (
            <>
                <button className='edit-btn' onClick={editCommentHandler}>Редактирай</button>
                <button className='edit-btn' onClick={deleteHandler}>Изтрий</button>
            </>
        )
    };

    const AdminBtn = () => {
        return (
            <>
                <button className='edit-btn' onClick={approveHandler}>Одобри</button>
                <button className='delete-btn' onClick={rejectHandler}>Отхвърли</button>
            </>
        )
    };

    return (
        <div className='user-author-btn'>
            {userID && isAdmin
                ? <>
                    <AdminBtn />
                    <UserBtn />
                </>
                : <UserBtn />
            }
        </div>
    );
}

export default AddCommentBtns;