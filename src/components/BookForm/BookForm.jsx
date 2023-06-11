import React, {useEffect, useState} from 'react';
import style from './BookForm.module.scss';
import {CloseButton, DateContainer, Description, FormButtons} from "./components";
import {TitleContainer} from "./components/TitleContainer";
import {changeFormState, deleteBook} from "../../redux/reducer/booksReducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

//Форма для добавления / редактирования / просмотра книг
function BookForm({model, onSubmit, submitButtonTitle, withDeleteButton}) {
    const isReadonly = !submitButtonTitle;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [authorValue, setAuthorValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [dateFromValue, setDateFromValue] = useState('');
    const [dateToValue, setDateToValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const bookId = useParams().bookId;
    const isLoading = useSelector(state => state.isLoading);
    const isFormCompleted = useSelector(state => state.isFormCompleted);

    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateFromError, setIsDateFromError] = useState(false);
    const [isDateToError, setIsDateToError] = useState(false);

    function onFormSubmit(event) {
        event.preventDefault();

        const title = titleValue.replace(/\s+/gm,' ').trim();
        const description = descriptionValue.replace(/\s+/gm,' ').trim();
        const author = authorValue.replace(/\s+/gm,' ').trim();

        const isTitleError = !title.trim();
        const isDateFromError = dateFromValue.split('').includes('_');
        const isDateToError = dateToValue.split('').includes('_');

        //Проверка правильности ввода
        setIsTitleError(isTitleError);
        setIsDateFromError(isDateFromError);
        setIsDateToError(isDateToError);

        if (isTitleError|| isDateFromError || isDateToError){
            return false
        }

        onSubmit(title, description, author, dateFromValue, dateToValue);
    }

    function onDeleteClick() {
        dispatch(deleteBook(+bookId));
    }

    function onCloseClick() {
        navigate('/');
    }

    function onDateFromChange(event) {
        setDateFromValue(event.target.value)
    }

    function onDateToChange(event) {
        setDateToValue(event.target.value)
    }

    function onTitleChange(event) {
        setTitleValue(event.target.value)
    }

    function onAuthorChange(event) {
        setAuthorValue(event.target.value)
    }

    function onDescriptionChange(event) {
        setDescriptionValue(event.target.value)
    }

    //Переадресация после отправки формы
    useEffect(() => {
        if (!isLoading && isFormCompleted){
            navigate('/');
            dispatch(changeFormState(false));
        }
    }, [isLoading, isFormCompleted]);

    useEffect(() => {
        setDescriptionValue(model.description ?? '');
        setDateFromValue(model?.dateFrom ?? '');
        setDateToValue(model?.dateTo ?? '');
        setAuthorValue(model.author ?? '');
        setTitleValue(model.title ?? '');
    }, [model]);

    return (
            <form className={style.form} onSubmit={onFormSubmit}>
                <TitleContainer isReadonly={isReadonly} model={model}
                    onTitleChange={onTitleChange} onAuthorChange={onAuthorChange}
                        isTitleError={isTitleError} authorValue={authorValue} titleValue={titleValue}/>

                <DateContainer isReadonly={isReadonly} model={model} dateToValue={dateToValue}
                    dateFromValue={dateFromValue} onDateFromChange={onDateFromChange} onDateToChange={onDateToChange}
                       isDateFromError={isDateFromError} isDateToError={isDateToError}/>

                <Description isReadonly={isReadonly} model={model}
                     descriptionValue={descriptionValue} onDescriptionChange={onDescriptionChange}/>

                {!isReadonly && <FormButtons onDeleteClick={onDeleteClick} onFormSubmit={onFormSubmit}
                    submitButtonTitle={submitButtonTitle} withDeleteButton={withDeleteButton}/>}

                <CloseButton onCloseClick={onCloseClick}/>
            </form>
    );
}

export default BookForm;