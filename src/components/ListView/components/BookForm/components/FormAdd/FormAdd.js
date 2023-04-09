import React, {useRef, useState} from 'react';
import style from './FormAdd.module.scss';
import InputMask from "react-input-mask";
import formValidation from "../../../../../../utils/formValidation";
import {useDispatch} from "react-redux";

function FormAdd({setFormState}) {
    const [inputValue, setInputValue] = useState();

    const dispatch = useDispatch();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateFromRef = useRef();
    const dateToRef = useRef();

    function onInputChange(event) {
        setInputValue(event.value)
    }

    return (
        <>
            <label>
                Название книги
                <input type="text" placeholder='Название книги' ref={titleRef}/>
            </label>

            <label>
                Описание
                <input type="text" placeholder='Описание' ref={descriptionRef}/>
            </label>

            <label>
                Дата начала чтения
                <InputMask mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' ref={dateFromRef}
                           onChange={onInputChange} value={inputValue}/>
            </label>

            <label>
                Дата окончания чтения
                <InputMask mask='99.99.9999' placeholder='ДД.ММ.ГГГГ' ref={dateToRef}
                           onChange={onInputChange} value={inputValue}/>
            </label>

            <button onClick={() => formValidation('ADD', {
                title: titleRef.current?.value,
                description: descriptionRef.current?.value,
                dateFrom: dateFromRef.current?.value,
                dateTo: dateToRef.current?.value,
            }, {
                setFormState: setFormState,
                dispatch: dispatch
            })}>
                Добавить
            </button>
        </>
    );
}

export default FormAdd;