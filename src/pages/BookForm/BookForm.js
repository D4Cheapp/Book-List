import React, {useEffect, useRef} from 'react';
import style from './BookForm.module.scss';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {CloseButton, DateContainer, FormButtons} from "./components";
import {TitleContainer} from "./components/TitleContainer";
import {getBookById} from "../../redux/actions";

function BookForm() {
    const dispatch = useDispatch();

    const bookId = useParams().bookId;
    const type = useSearchParams()[0].get('type');
    let bookInfo = useSelector(state => state)?.at(0);

    const titleRef = useRef();
    const authorRef = useRef();
    const descriptionRef = useRef();
    const dateFromRef = useRef();
    const dateToRef = useRef();

    useEffect(() => {
        if (!bookInfo){
            dispatch(getBookById(bookId));
        }
    }, []);

    return (
        <form className={style.form} onSubmit={(event) => event.preventDefault()}>

            <TitleContainer refs={{titleRef: titleRef, authorRef: authorRef}}
                    bookInfo={bookInfo} parentStyle={style}/>

            <DateContainer refs={{dateToRef: dateToRef, dateFromRef: dateFromRef}}
                   bookInfo={bookInfo} parentStyle={style}/>

            <label className={clsx(style.label, style.description)}>
                Описание

                <textarea className={style.input} ref={descriptionRef}
                       defaultValue={bookInfo ? bookInfo.description : ''} readOnly={!type}/>
            </label>

            <FormButtons bookInfo={bookInfo} refs={{
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