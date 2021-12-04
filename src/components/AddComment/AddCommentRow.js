const AddCommentRow = ({className, name, img, text, date}) => {
    return (
        <div className={className}>
            <img src={img} alt='' className='rounded-circle' width='40' height='40' />
            <h4 className='comment-h4'>{name}</h4> <span>{date}</span> <br />
            <p>{text}</p>
        </div>
    );
}

export default AddCommentRow;