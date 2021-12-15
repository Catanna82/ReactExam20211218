import Logo from '../Logo/Logo';
import MyCommentRow from './MyCommentRow';
import { format as formatDate } from 'date-fns'
import { useEffect, useContext, useState } from 'react';
import './myComment.css';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import EditComments from '../EditComments/EditComments';

const MyComments = ({ getFetch, postFetch }) => {

    const load = async () => {
        const data = await getFetch(`/api/loadComment/${userID}`);
        setComments(data);
    }

    const [comments, setComments] = useState([]);

    const [editComment, setEditComment] = useState({
        commentID: null,
        text: ''
    });

    useEffect(() => load(), []);

    // const onChangeHandler = (e) => {
    //     const { name, value } = e.target;

    //     setInput(oldInput => {
    //         return {
    //             ...oldInput,
    //             [name]: value
    //         };
    //     });
    // };
    const onClickHandler = async () => {
        debugger;
        await postFetch('/api/updateComment', editComment);
        load();
        setEditComment({
            commentID: null,
            text: ''
        });
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
                            {comments.map(({ date, msg, name, _id }, i) => {
                                const style = (i % 2 === 0 && 'my-comment mt-4 text-justify float-left') ||
                                    'text-justify my-darker mt-4 float-right';
                                return (
                                    < MyCommentRow
                                        key={_id}
                                        className={style}
                                        name={name}
                                        img='https://i.imgur.com/yTFUilP.jpg'
                                        date={formatDate(new Date(date), 'dd/MM/yyyy')}
                                        text={msg}
                                        commentID={_id}
                                        setEditComment={setEditComment}
                                    />
                                );
                            })}
                        </div>
                        {
                            editComment.commentID && <EditComments text={editComment.text} commentID={editComment.commentID} onClickHandler={onClickHandler} setEditComment={setEditComment}/>
                        }
                    </div>
                </div>
            </section>
        </>
    )
        : <Redirect to='/' />
}

export default MyComments;