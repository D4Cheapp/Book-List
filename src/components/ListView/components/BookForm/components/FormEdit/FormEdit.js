import React, {useRef, useState} from 'react';
import style from './FormEdit.module.scss';
import InputMask from "react-input-mask";
import {useDispatch} from "react-redux";

function FormEdit({bookInfo, setFormState}) {
    const [inputValue, setInputValue] = useState();

    const dispatch = useDispatch();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    function onInputChange(event) {
        setInputValue(event.value)
    }

    function editBook() {
        if (titleRef.current?.value.trim() &&
            !dateRef.current?.value.split('').includes('_') ) {

            const newBookInfo = {
                title: titleRef.current?.value.replace(/\s+/gm, ' ').trim(),
                description: descriptionRef.current?.value.replace(/\s+/gm, ' ').trim(),
                data: dateRef.current?.value,
                id: bookInfo.id,
            };

            dispatch({type: 'EDIT', bookInfo: newBookInfo});
            setFormState(['hide', null]);
        }
        else {
                alert('Пожалуйста правильно введите данные')
        }
    }

    function deleteBook() {
        dispatch({type: 'DELETE', id: bookInfo.id});
        setFormState(['hide', null]);
    }

    return (
        <>
            <input type="text" placeholder='Название книги' defaultValue={bookInfo.title} ref={titleRef}/>

            <input type="text" placeholder='Описание' defaultValue={bookInfo.description} ref={descriptionRef}/>

            <InputMask mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' defaultValue={bookInfo.date} ref={dateRef}
                       onChange={onInputChange} value={inputValue}/>

            <button onClick={editBook}>
                Сохранить
            </button>

            <button onClick={deleteBook}>
                Удалить
            </button>
        </>
    );
}

export default FormEdit;