import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';

const UserBtn = () => {
    return (
        <>
            <button className='edit-btn'>Редактирай</button>
            <button className='edit-btn'>Изтрий</button>
        </>
    )
};

const AdminBtn = () => {
    return (
        <>
            <button className='edit-btn'>Одобри</button>
            <button className='delete-btn'>Отхвърли</button>
        </>
    )
};

const AddCommentBtns = () => {
    const { user: {
        userID,
        isAdmin
    } } = useContext(AuthContext);
    return (
        <div className='user-author-btn'>
            {userID && isAdmin
                ? <>
                    <AdminBtn />
                    <UserBtn />
                </>
                : <UserBtn />
            }
        </div>
    );
}

export default AddCommentBtns;