import React, {useRef, useState} from 'react';
import style from './FormAdd.module.scss';
import InputMask from "react-input-mask";
import {useDispatch} from "react-redux";

function FormAdd({setFormState}) {
    const [inputValue, setInputValue] = useState();

    const dispatch = useDispatch();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();


    function onInputChange(event) {
        setInputValue(event.value)
    }

    function bookAdd() {
        const bookInfo ={
            title: titleRef.current?.value,
            description: descriptionRef.current?.value,
            data: dateRef.current?.value,
            id: Date.now()
        };

        dispatch({type: 'ADD', bookInfo: bookInfo});
        setFormState(['hide', null]);
    }

    return (
        <>
            <input type="text" placeholder='Название книги' ref={titleRef}/>

            <input type="text" placeholder='Описание' ref={descriptionRef}/>

            <InputMask mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' ref={dateRef}
                       onChange={onInputChange} value={inputValue}/>

            <button onClick={bookAdd}>
                Добавить
            </button>
        </>
    );
}

export default FormAdd;