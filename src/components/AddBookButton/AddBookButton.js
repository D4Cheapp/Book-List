import React from 'react';
import style from './AddBookButton.module.scss';
import {useNavigate} from "react-router-dom";

//Кнопка добавления книги
function AddBookButton() {
    const navigate = useNavigate();

    return (
        <div className={style.buttonContainer}>
            <button className={style.addButton} onClick={() => navigate({
                pathname: '/book/',
                search: `type=add`,
            })}/>
        </div>
    );
}

export default AddBookButton;