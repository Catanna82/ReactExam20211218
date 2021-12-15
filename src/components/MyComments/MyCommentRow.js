import AddCommentBtns from "../Common/Btns/AddCommentBtns";

const AddCommentRow = ({className, name, img, text, date, commentID, setEditComment }) => {
    return (
        <div className={className}>
            <img src={img} alt='' className='rounded-circle' width='40' height='40' />
            <h4 className='my-comment-h4'>{name}</h4> <span className='my-comment-span'>{date}</span> <br />
            <p className='my-comment-p' value={text}>{text}</p>
            <AddCommentBtns text={text} commentID={commentID} setEditComment={setEditComment} />
        </div>
    );
}

export default AddCommentRow;