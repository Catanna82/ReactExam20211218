import AddCommentBtns from "../Common/Btns/AddCommentBtns";

const CommentRow = ({
    className,
    name,
    img,
    text,
    date,
    commentID,
    setEditComment,
    onDeleteHandler,
    status,
    approveComment,
    rejectComment
}) => {
    return (
        <div className={className}>
            <img src={img} alt='' className='rounded-circle' width='40' height='40' />
            <h4 className='my-comment-h4'>{name}</h4>
            <span className='my-comment-span'>{date}</span> <br />
            <p className='my-comment-p' value={text}>{text}</p>
            <AddCommentBtns
                text={text}
                commentID={commentID}
                setEditComment={setEditComment}
                onDeleteHandler={onDeleteHandler}
                status={status}
                approveComment={approveComment}
                rejectComment={rejectComment}
            />
        </div>
    );
}

export default CommentRow;