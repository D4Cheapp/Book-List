import React from 'react';
import style from './AddBookButton.module.scss';
import {useNavigate} from "react-router-dom";

//Кнопка добавления книги
function AddBookButton() {
    const navigate = useNavigate();

    function onAddClick(){
        navigate('book/add');
    }

    return (
        <div className={style.buttonContainer}>
            <button className={style.addButton} onClick={onAddClick}/>
        </div>
    );
}

export default AddBookButton;