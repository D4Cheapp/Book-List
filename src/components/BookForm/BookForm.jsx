import React, {useEffect, useRef, useState} from 'react';
import style from './BookForm.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {CloseButton, DateContainer, Description, FormButtons} from "./components";
import {TitleContainer} from "./components/TitleContainer";
import {fetchBookById} from "../../redux/reducer/jsonServerReducer";
import {CreateBookFormContext} from "../../utils/createBookFormContext";

//Форма для добавления / редактирования / просмотра книг
function BookForm({isView, isAdd, isEdit}) {
    const dispatch = useDispatch();

    const bookId = useParams().bookId;
    const bookInfo = isAdd ? {} : useSelector(state => state.book);

    const titleRef = useRef();
    const authorRef = useRef();
    const descriptionRef = useRef();
    const dateFromRef = useRef();
    const dateToRef = useRef();

    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateFromError, setIsDateFromError] = useState(false);
    const [isDateToError, setIsDateToError] = useState(false);

    function onFormSubmit(event) {
        event.preventDefault();
    }

    //Если книга не добавляется, то она запрашивается по id
    useEffect(() => {
        if (!isAdd){
            dispatch(fetchBookById(bookId));
        }
    },[]);

    return (
        <CreateBookFormContext.Provider value={{
            refs:{dateToRef, dateFromRef, titleRef, authorRef, descriptionRef}, bookInfo, bookId, isAdd, isView, isEdit,
            style, isDateFromError, isTitleError, isDateToError, setIsDateFromError, setIsDateToError, setIsTitleError
        }}>
            <form className={style.form} onSubmit={onFormSubmit}>

                <TitleContainer/>

                <DateContainer/>

                <Description/>

                {!isView && <FormButtons/>}

                <CloseButton/>
            </form>
        </CreateBookFormContext.Provider>

    );
}

export default BookForm;