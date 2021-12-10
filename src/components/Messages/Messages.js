// import MessagesRow from './MessagesRow';
import Logo from '../Logo/Logo';
import './messagesStyle.css';

const Messages = (messages) => {
    return (
        <>
            <Logo />
            <section className='my-message-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5 col-md-6 col-12 pb-4 my-comment-flex'>
                            {/* {messages.map(({ email, msg, userName}, i) => {
                                const style = (i % 2 === 0 && 'my-comment mt-4 text-justify float-left') ||
                                    'text-justify my-darker mt-4 float-right';
                                return (
                                    < MessagesRow
                                        key={userName + i}
                                        className={style}
                                        name={userName}
                                        email={email}
                                        text={msg}
                                    />
                                );
                            })} */}
                            <div className='msg'>
                                <p>Все още няма запитвания!</p>
                            </div>
                            {/* <div className='text-justify add-darker-msg mt-4 float-right'>
                                <h4 className='my-comment-h4'>Anna Todorova</h4> <span className='my-comment-span'>anna@abv.bg</span> <br />
                                <p className='my-comment-p'>GJdogjdsogjdsgjs dogjsogjsogjsiogjk eostkeokd lxfvkd sogkfds'</p>
                            </div>
                            <div className='add-msg mt-4 text-justify float-left'>
                                <h4 className='my-comment-h4'>Anna Todorova</h4> <span className='my-comment-span'>anna@abv.bg</span> <br />
                                <p className='my-comment-p'>GJdogjdsogjdsgjs dogjsogjsogjsiogjk eostkeokd lxfvkd sogkfds'</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Messages;