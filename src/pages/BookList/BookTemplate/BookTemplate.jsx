import React from 'react';
import style from './BookTemplate.module.scss';
import {useNavigate} from "react-router-dom";
import clsx from "clsx";

//Шаблон для книги в списке
function BookTemplate({bookInfo, loading}) {
    const navigate = useNavigate();

    //Перемещение на страницу редактирования книги
    function onEditClick() {
        navigate(`/book/edit/${bookInfo.id}`);
    }

    //Перемещение на страницу просмотра книги
    function onViewClick() {
        navigate(`/book/${bookInfo.id}`);
    }

    return (
        <div className={style.book}>
            {loading ?
            <>
                <div className={clsx(style.titleContainer, style.titleLoading)}/>

                <button className={clsx(style.button, style.buttonLoading)}/>
                <button className={clsx(style.button, style.buttonLoading)}/>
            </>
            :
            <>
                {/*Название книги*/}
                <div className={style.titleContainer}>
                    <p className={style.title}>{bookInfo.title}</p>
                </div>

                {/*Кнопка редактирования*/}
                <button className={clsx(style.button, style.edit)} onClick={onEditClick}/>

                {/*Кнопка быстрого просмотра*/}
                <button className={clsx(style.button, style.view)} onClick={onViewClick}/>
            </>
            }

        </div>
    );
}

export default BookTemplate;