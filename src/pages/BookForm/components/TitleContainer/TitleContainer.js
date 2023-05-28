import React, {useContext, useEffect, useState} from 'react';
import {BookFormContext} from "../../../../utils/bookFormContext";
import clsx from "clsx";

//Контейнер для названия и автора книги
function TitleContainer() {
    const {bookInfo, refs, style, type, isTitleError} = useContext(BookFormContext);

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        setAuthor(bookInfo.title ? bookInfo.author : '');
        setTitle(bookInfo.title ? bookInfo.title : '');
    }, [bookInfo]);

    return (
        <div className={style.inputContainer}>
            <label className={style.label}>
                Название книги

                <input className={style.input} type="text" ref={refs.titleRef} disabled={!type}
                       defaultValue={title} readOnly={!type}/>

                <p className={clsx(style.error, {[style.hiddenError]: !isTitleError})}>
                    Введите название книги
                </p>
            </label>

            <label className={style.label}>
                Автор книги

                <input className={style.input} type="text" ref={refs.authorRef} disabled={!type}
                       defaultValue={author} readOnly={!type}/>
            </label>
        </div>
    );
}

export default TitleContainer;