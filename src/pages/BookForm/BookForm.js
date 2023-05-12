import React, {useEffect, useRef} from 'react';
import style from './BookForm.module.scss';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {CloseButton, DateContainer, FormButtons} from "./components";
import {TitleContainer} from "./components/TitleContainer";
import {getBookById} from "../../redux/saga/actions";

//Форма для добавления / редактирования / просмотра книг
function BookForm() {
    const dispatch = useDispatch();

    let bookInfo = useSelector(state => state);
    if (bookInfo?.length === 1){
        bookInfo = bookInfo[0];
    }

    const bookId = useParams().bookId;
    const type = useSearchParams()[0].get('type');

    const titleRef = useRef();
    const authorRef = useRef();
    const descriptionRef = useRef();
    const dateFromRef = useRef();
    const dateToRef = useRef();

    //Если книга не добавляется, то она запрашивается по id
    useEffect(() => {
        if (type !== 'add'){
            dispatch(getBookById(bookId));
        }
    },[]);

    return (
        <form className={style.form} onSubmit={(event) => event.preventDefault()}>

            <TitleContainer refs={{titleRef, authorRef}} bookInfo={bookInfo} parentStyle={style} type={type}/>

            <DateContainer refs={{dateToRef, dateFromRef}} bookInfo={bookInfo} parentStyle={style} type={type}/>

            <label className={clsx(style.label, style.description)}>
                Описание

                <textarea className={style.input} ref={descriptionRef} disabled={!type}
                       defaultValue={bookInfo ? bookInfo.description : ''} readOnly={!type}/>
            </label>

            <FormButtons bookInfo={bookInfo} type={type} bookId={bookId}
                     refs={{dateToRef, dateFromRef, titleRef, authorRef, descriptionRef}} />

            <CloseButton/>
        </form>
    );
}

export default BookForm;