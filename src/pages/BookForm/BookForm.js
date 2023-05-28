import React, {useEffect, useRef, useState} from 'react';
import style from './BookForm.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {CloseButton, DateContainer, Description, FormButtons} from "./components";
import {TitleContainer} from "./components/TitleContainer";
import {getBookById} from "../../redux/reducer/jsonServerReducer";
import {BookFormContext} from "../../utils/bookFormContext";

//Форма для добавления / редактирования / просмотра книг
function BookForm() {
    const dispatch = useDispatch();
    const bookId = useParams().bookId;

    const type = useSearchParams()[0].get('type');
    const bookInfo = type === 'add' ? {} : useSelector(state => state.book);

    const titleRef = useRef();
    const authorRef = useRef();
    const descriptionRef = useRef();
    const dateFromRef = useRef();
    const dateToRef = useRef();

    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateFromError, setIsDateFromError] = useState(false);
    const [isDateToError, setIsDateToError] = useState(false);

    //Если книга не добавляется, то она запрашивается по id
    useEffect(() => {
        if (type !== 'add'){
            dispatch(getBookById(bookId));
        }
    },[]);

    return (
        <BookFormContext.Provider value={{
            refs:{dateToRef, dateFromRef, titleRef, authorRef, descriptionRef}, bookInfo, bookId, type, style,
            isDateFromError, isTitleError, isDateToError, setIsDateFromError, setIsDateToError, setIsTitleError
        }}>
            <form className={style.form} onSubmit={(event) => event.preventDefault()}>

                <TitleContainer/>

                <DateContainer/>

                <Description/>

                {type && <FormButtons/>}

                <CloseButton/>
            </form>
        </BookFormContext.Provider>

    );
}

export default BookForm;