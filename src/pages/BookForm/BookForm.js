import React, {useRef} from 'react';
import style from './BookForm.module.scss';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {CloseButton, DateContainer, FormButtons} from "./components";
import clsx from "clsx";

function BookForm() {
    const {type, bookId} = useParams();
    const formReadonly = type === 'view';

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateFromRef = useRef();
    const dateToRef = useRef();

    const books = useSelector(state => state);
    let bookInfo = books.filter(book => book.id === +bookId)[0];

    return (
        <form className={style.form} onSubmit={(event) => event.preventDefault()}>

            <label className={style.label}>
                Название книги

                <input className={style.input} type="text" ref={titleRef}
                       defaultValue={bookInfo ? bookInfo.title : ''} readOnly={formReadonly}/>
            </label>

            <DateContainer refs={{dateToRef: dateToRef, dateFromRef: dateFromRef}} bookInfo={bookInfo}/>

            <label className={clsx(style.label, style.description)}>
                Описание

                <textarea className={style.input} ref={descriptionRef}
                       defaultValue={bookInfo ? bookInfo.description : ''} readOnly={formReadonly}/>
            </label>

            <FormButtons bookInfo={bookInfo} refs={
                {
                    dateToRef: dateToRef,
                    dateFromRef: dateFromRef,
                    titleRef: titleRef,
                    descriptionRef: descriptionRef,
                }}/>

            <CloseButton/>
        </form>
    );
}

export default BookForm;