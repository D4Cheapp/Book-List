import React, {useRef, useState} from 'react';
import style from './FormEdit.module.scss';
import InputMask from "react-input-mask";
import {useDispatch} from "react-redux";
import formValidation from "../../../../../../utils/formValidation";

function FormEdit({bookInfo, setFormState}) {
    const [inputValue, setInputValue] = useState();

    const dispatch = useDispatch();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateFromRef = useRef();
    const dateToRef = useRef();

    function onInputChange(event) {
        setInputValue(event.value)
    }

    function deleteBook() {
        dispatch({type: 'DELETE', id: bookInfo.id});
        setFormState(['hide', null]);
    }

    return (
        <>
            <label>
                Название книги
                <input type="text" placeholder='Название книги' defaultValue={bookInfo.title} ref={titleRef}/>
            </label>

            <label>
                Описание
                <input type="text" placeholder='Описание' defaultValue={bookInfo.description} ref={descriptionRef}/>
            </label>

            <label>
                Дата начала чтения
                <InputMask mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' defaultValue={bookInfo.dateFrom} ref={dateFromRef}
                           onChange={onInputChange} value={inputValue}/>
            </label>


            <label>
                Дата окончания чтения
                <InputMask mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' defaultValue={bookInfo.dateTo} ref={dateToRef}
                           onChange={onInputChange} value={inputValue}/>
            </label>


            <button onClick={() => formValidation('EDIT', {
                title: titleRef.current?.value,
                description: descriptionRef.current?.value,
                dateFrom: dateFromRef.current?.value,
                dateTo: dateToRef.current?.value,
            }, {
                setFormState: setFormState,
                bookInfo: bookInfo,
                dispatch: dispatch
            })}>
                Сохранить
            </button>

            <button onClick={deleteBook}>
                Удалить
            </button>
        </>
    );
}

export default FormEdit;