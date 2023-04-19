import React from 'react';
import style from './TitleContainer.module.scss';
import {useSearchParams} from "react-router-dom";

function TitleContainer({refs, bookInfo, parentStyle}) {
    const type = useSearchParams()[0].get('type');

    return (
        <div className={parentStyle.inputContainer}>
            <label className={style.label}>
                Название книги

                <input className={style.input} type="text" ref={refs.titleRef}
                       defaultValue={bookInfo ? bookInfo.title : ''} readOnly={!type}/>
            </label>

            <label className={style.label}>
                Автор книги

                <input className={style.input} type="text" ref={refs.authorRef}
                       defaultValue={bookInfo ? bookInfo.author : ''} readOnly={!type}/>
            </label>
        </div>
    );
}

export default TitleContainer;