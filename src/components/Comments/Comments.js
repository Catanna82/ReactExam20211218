import Logo from '../Logo/Logo';
import CommentRow from './CommentRow';
import { format as formatDate } from 'date-fns'
import { useEffect, useContext, useState } from 'react';
import './myComment.css';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import EditComments from '../EditComments/EditComments';

const Comments = ({ getFetch, postFetch, userId, status }) => {
    const load = async () => {
        let data;
        if(userId) {
            data = await getFetch(`/api/loadComment/${userID}`);
        } else if (status) {
            data = await getFetch(`/api/loadComments/${status}`);
        }
        setComments(data);
    }

    const [comments, setComments] = useState([]);

    const [editComment, setEditComment] = useState({
        commentID: null,
        text: ''
    });

    useEffect(() => load(), []);

    const onClickHandler = async () => {
        await postFetch('/api/updateComment', editComment);
        load();
        setEditComment({
            commentID: null,
            text: ''
        });
    };
    const onDeleteHandler = async (commentID) => {
        await postFetch('/api/deleteComment', {commentID});
        load();
    };

    const approveComment = async (commentID) => {
        await postFetch('/api/updateComment', {
            commentID,
            status: 'approved'
        });
        load();
    };

    const rejectComment = async (commentID) => {
        await postFetch('/api/updateComment', {
            commentID,
            status: 'rejected'
        });
        load();
    };

    const { user: {
        userID
    } } = useContext(AuthContext);

    return userID ? (
        <>
            <Logo />
            <section className='my-comp-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5 col-md-6 col-12 pb-4 my-comment-flex'>
                            {comments.map(({ date, msg, name, _id, status }, i) => {
                                const style = (i % 2 === 0 && 'my-comment mt-4 text-justify float-left') ||
                                    'text-justify my-darker mt-4 float-right';
                                return (
                                    < CommentRow
                                        key={_id}
                                        className={style}
                                        name={name}
                                        img='https://i.imgur.com/yTFUilP.jpg'
                                        date={formatDate(new Date(date), 'dd/MM/yyyy')}
                                        text={msg}
                                        commentID={_id}
                                        setEditComment={setEditComment}
                                        onDeleteHandler={onDeleteHandler}
                                        status={status}
                                        approveComment={approveComment}
                                        rejectComment={rejectComment}
                                    />
                                );
                            })}
                        </div>
                        {
                            editComment.commentID &&
                                <EditComments
                                    text={editComment.text}
                                    commentID={editComment.commentID}
                                    onClickHandler={onClickHandler}
                                    setEditComment={setEditComment}
                                />
                        }
                    </div>
                </div>
            </section>
        </>
    )
        : <Redirect to='/' />
}

export default Comments;