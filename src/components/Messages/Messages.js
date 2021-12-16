import AddCommentRow from '../AddComment/AddCommentRow';
import { useEffect, useContext, useState } from 'react';
import Logo from '../Logo/Logo';
import { Redirect } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
import './messagesStyle.css'

const Messages = ({ postFetch }) => {

    const [messages, setMessages] = useState([]);

    const loadMsg = async () => {
        const data = await postFetch('/api/loadMessages');
        setMessages(data);
    }
    useEffect(() => loadMsg(), []);

    const { user: {
        isAdmin
    } } = useContext(AuthContext);
    return isAdmin ? (
        <>
            <Logo />
            <section className='my-message-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5 col-md-6 col-12 pb-4 my-comment-flex'>
                            {messages.map(({ email, msg, name, _id }, i) => {
                                const style = (i % 2 === 0 && 'my-comment mt-4 text-justify float-left') ||
                                    'text-justify my-darker mt-4 float-right';
                                return (
                                    < AddCommentRow
                                        key={_id}
                                        className={style}
                                        name={`${name} (${email})`}
                                        text={msg}
                                        img={'/images/message.png'}
                                    />
                                );
                            })}
                            {messages.length===0 &&
                            <div className='msg'>
                                <p>Все още няма запитвания!</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        : <Redirect to='/' />
}

export default Messages;