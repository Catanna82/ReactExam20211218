import { useState } from "react";

export default function Contacts({ postFetch }) {
    const initialMsgState = {
        name: '',
        email: '',
        msg: ''
    }
    const [message, setMessage] = useState(initialMsgState);
    const sendMessageHandler = async () => {
        await postFetch('/api/saveMessage', message);
        setMessage(initialMsgState);
    };

    const changeMsgInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setMessage({
            ...message,
            [name]: value
        })
    };

    return (
        <div id='contact' className='spacer'>
            <div className='container contactform center'>
                <h2 className='text-center  wowload fadeInUp'>Свържете се с нас</h2>
                <div className='row wowload fadeInLeftBig'>
                    <div className='col-sm-6 col-sm-offset-3 col-xs-12'>
                        <input type='text' placeholder='Име' onChange={changeMsgInput} value={message.name} name='name' />
                        <input type='text' placeholder='Електронна поща' onChange={changeMsgInput} value={message.email} name='email' />
                        <textarea rows='5' placeholder='Съобщение' onChange={changeMsgInput} value={message.msg} name='msg'></textarea>
                        <button className='btn btn-primary' onClick={sendMessageHandler}><i className='fa fa-paper-plane'></i> Изпрати запитване</button>
                    </div>
                </div>
            </div>
        </div>
    );
}