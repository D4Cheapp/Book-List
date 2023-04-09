import React, {useRef, useState} from 'react';
import style from './BookForm.module.scss';
import InputMask from "react-input-mask";
import {useDispatch} from "react-redux";

function BookForm({formState, setFormState}) {
    const [inputValue, setInputValue] = useState();

    const bookInfo = formState[1];

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

    function formValidation() {
        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;
        const dateFrom = dateFromRef.current?.value;
        const dateTo = dateToRef.current?.value;

        if (title.trim() &&
            !(dateFrom + dateTo).split('').includes('_')) {

            const newBookInfo = {
                title: title.replace(/\s+/gm,' ').trim(),
                description: description.replace(/\s+/gm,' ').trim(),
                dateFrom: dateFrom,
                dateTo: dateTo,
            };

            if (formState[0] === 'edit'){
                newBookInfo.id = formState[1].id;
            }
            else {
                newBookInfo.id = Date.now();
            }

            dispatch({type: formState[0], bookInfo: newBookInfo});
            setFormState(['hide', null]);
        }
        else {
            alert('Пожалуйста правильно введите данные')
        }
    }

    return (
        <>{
            formState[0] !== 'hide' &&

            <form className={style.form} onSubmit={(event) => event.preventDefault()}>

                <label className={style.label}>
                    Название книги
                    <input className={style.input} type="text" placeholder='Название книги' ref={titleRef}
                           defaultValue={!!bookInfo ? bookInfo.title : ''} readOnly={formState[0] === 'view'}/>
                </label>

                <label className={style.label}>
                    Описание
                    <input className={style.input} type="text" placeholder='Описание' ref={descriptionRef}
                           defaultValue={!!bookInfo ? bookInfo.description : ''} readOnly={formState[0] === 'view'}/>
                </label>

                <div className={style.date}>
                    <label className={style.label}>
                        Дата начала чтения
                        <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                           ref={dateFromRef} onChange={onInputChange} value={inputValue}
                                defaultValue={!!bookInfo ? bookInfo.dateFrom : ''} readOnly={formState[0] === 'view'}/>
                    </label>

                    <label className={style.label}>
                        Дата окончания чтения
                        <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                           ref={dateToRef} onChange={onInputChange} value={inputValue}
                                defaultValue={!!bookInfo ? bookInfo.dateTo : ''} readOnly={formState[0] === 'view'}/>
                    </label>
                </div>

                {formState[0] !== 'view' &&
                    <>
                        <button type='button' className={style.add} onClick={formValidation}>
                            {formState[0] === 'add' ? 'Добавить' : 'Сохранить'}
                        </button>

                        {formState[0] === 'edit' &&
                            <button type='button' onClick={deleteBook}>
                                Удалить
                            </button>
                        }
                    </>
                }

                <button type='button' className={style.close} onClick={() => setFormState(['hide', null])}/>
            </form>
        }</>
    );
}

export default BookForm;