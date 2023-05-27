import React, {useEffect, useState} from 'react';
import style from './TitleContainer.module.scss';

//Контейнер для названия и автора книги
function TitleContainer({refs, bookInfo, parentStyle, type}) {

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        setAuthor(bookInfo.title ? bookInfo.author : '');
        setTitle(bookInfo.title ? bookInfo.title : '');
    }, [bookInfo]);

    return (
        <div className={parentStyle.inputContainer}>
            <label className={style.label}>
                Название книги

                <input className={style.input} type="text" ref={refs.titleRef} disabled={!type}
                       defaultValue={title} readOnly={!type}/>
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