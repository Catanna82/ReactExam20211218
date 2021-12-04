import Logo from '../Logo/Logo';
import './addComment.css';
import MyCommentRow from './MyCommentRow';

const myComments = () => {

    return (
        <>
            <Logo />
            <section className='comp-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5 col-md-6 col-12 pb-4'>
                            <MyCommentRow
                                className='comment mt-4 text-justify float-left'
                                name='Krasimir Kolev'
                                img='https://i.imgur.com/yTFUilP.jpg'
                                date='- 20 October, 2018'
                                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                            />
                            <MyCommentRow
                                className='text-justify darker mt-4 float-right'
                                name='Anna Todorova'
                                img='https://i.imgur.com/CFpa3nK.jpg'
                                date='- 28 October, 2021'
                                text='Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?'
                            />
                            <MyCommentRow
                                className='comment mt-4 text-justify'
                                name='Jan Todorov'
                                img='https://i.imgur.com/yTFUilP.jpg'
                                date='- 20 October, 2018'
                                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                            />
                            <MyCommentRow
                                className='darker mt-4 text-justify'
                                name="Plamena Todorova"
                                img='https://i.imgur.com/CFpa3nK.jpg'
                                date='- 20 October, 2018'
                                text='Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default myComments;