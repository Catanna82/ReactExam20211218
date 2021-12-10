

const userBtn = (
    <>
        <button className='edit-btn'>Редактирай</button>
        <button className='delete-btn'>Изтрий</button>
    </>
);

const adminBtn = (
    <>
        <button className='edit-btn'>Одобри</button>
        <button className='delete-btn'>Отхвърли</button>
    </>
);

const AddCommentBtns = (userID) => {
    return (
        <div className='user-author-btn'>
            {userID
            ?  userBtn
            : adminBtn
            }
            </div>
    );
}

export default AddCommentBtns;