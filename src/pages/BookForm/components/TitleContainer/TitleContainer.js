import React from 'react';
import style from './TitleContainer.module.scss';

//Контейнер для названия и автора книги
function TitleContainer({refs, bookInfo, parentStyle, type}) {
    return (
        <div className={parentStyle.inputContainer}>
            <label className={style.label}>
                Название книги

                <input className={style.input} type="text" ref={refs.titleRef} disabled={!type}
                       defaultValue={bookInfo ? bookInfo.title : ''} readOnly={!type}/>
            </label>

            <label className={style.label}>
                Автор книги

                <input className={style.input} type="text" ref={refs.authorRef} disabled={!type}
                       defaultValue={bookInfo ? bookInfo.author : ''} readOnly={!type}/>
            </label>
        </div>
    );
}

export default TitleContainer;