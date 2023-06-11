import React from 'react';
import style from '../../BookForm.module.scss';
import clsx from "clsx";

//Контейнер для названия и автора книги
function TitleContainer({onAuthorChange, onTitleChange, authorValue, titleValue, isReadonly, isTitleError}) {
    return (
        <div className={style.inputContainer}>
            <label className={style.label}>
                Название книги

                <input className={style.input} type="text" disabled={isReadonly} onInput={onTitleChange}
                       defaultValue={titleValue} readOnly={isReadonly}/>

                <p className={clsx(style.error, {[style.hiddenError]: !isTitleError})}>
                    Введите название книги
                </p>
            </label>

            <label className={style.label}>
                Автор книги

                <input className={style.input} type="text" disabled={isReadonly} onInput={onAuthorChange}
                       defaultValue={authorValue} readOnly={isReadonly}/>
            </label>
        </div>
    );
}

export default TitleContainer;