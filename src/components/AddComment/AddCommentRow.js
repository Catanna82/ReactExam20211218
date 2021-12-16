import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';


const AddCommentRow = ({ className, name, img, text, date, likes, likeHandler, commentID }) => {
    const { user: {
        userID
    } } = useContext(AuthContext);

    const likesHelper = (e) => {
        e.preventDefault();
        likeHandler({
            commentID,
            likes: likes.concat([userID])
        });
    };
    return (
        <>
            <div className={className}>
                <>
                <img src={img} alt='' className='rounded-circle' width='40' height='40' />
                <h4 className='comment-h4'>{name}</h4> <span className='comment-span'>{date}</span> <br />
                <p className='comment-p'>{text}</p>
                </>
                {likes && <>
                <button className='edit-btn' onClick={likesHelper} disabled={likes.includes(userID)}>Харесай</button>
                <div className="likes">
                    <span id="total-likes">{likes.length} </span>
                    <img className="hearts" src="/images/heart.png" alt='hearts' />
                </div>
                </>}
            </div>
        </>
    );
}

export default AddCommentRow;