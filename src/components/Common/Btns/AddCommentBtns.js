import AuthContext from '../../../contexts/AuthContext';
import { useContext } from 'react';
import './addCommentBtnsStyle.css';

const AddCommentBtns = ({
    setEditComment,
    text,
    commentID,
    onDeleteHandler,
    status,
    approveComment,
    rejectComment
}) => {
    const { user: {
        userID,
        isAdmin
    } } = useContext(AuthContext);

    const editCommentHandler = (e) => {
        e.preventDefault();
        setEditComment({
            commentID: commentID,
            text: text
        });
    };

    const deleteCommentHandler = (e) => {
        e.preventDefault();
        onDeleteHandler(commentID);
    };
    const approveHandler = (e) => {
        e.preventDefault();
        approveComment(commentID);
    };
    const rejectHandler = (e) => {
        e.preventDefault();
        rejectComment(commentID);
    };

    const UserBtn = () => {

        return (
            <>
                <button className='edit-btn' onClick={editCommentHandler}>Редактирай</button>
                <button className='edit-btn' onClick={deleteCommentHandler}>Изтрий</button>
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
                    {status === 'pending' && <AdminBtn />}
                    <UserBtn />
                </>
                : <UserBtn />
            }
        </div>
    );
}

export default AddCommentBtns;