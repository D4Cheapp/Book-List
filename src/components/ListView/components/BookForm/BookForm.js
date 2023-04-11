import React, {useRef, useState} from 'react';
import style from './BookForm.module.scss';
import InputMask from "react-input-mask";
import {useDispatch} from "react-redux";

function BookForm({formState, setFormState}) {
    const [inputValue, setInputValue] = useState();

    const bookInfo = formState[1];
    const type = formState[0];

    const formReadonly = formState[0] === 'view';

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

            if (type === 'edit'){
                newBookInfo.id = bookInfo.id;
            }
            else {
                newBookInfo.id = Date.now();
            }

            dispatch({type: type.toUpperCase(), bookInfo: newBookInfo});
            setFormState(['hide', null]);
        }
        else {
            alert('Пожалуйста правильно введите данные')
        }
    }

    return (
        <>{
            type !== 'hide' &&

            <form className={style.form} onSubmit={(event) => event.preventDefault()}>

                <label className={style.label}>
                    Название книги

                    <input className={style.input} type="text" ref={titleRef}
                           defaultValue={bookInfo ? bookInfo.title : ''} readOnly={formReadonly}/>
                </label>

                <label className={style.label}>
                    Описание

                    <input className={style.input} type="text" ref={descriptionRef}
                           defaultValue={bookInfo ? bookInfo.description : ''} readOnly={formReadonly}/>
                </label>

                <div className={style.date}>
                    <label className={style.label}>
                        Дата начала чтения

                        <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                           ref={dateFromRef} onChange={onInputChange} value={inputValue}
                                defaultValue={bookInfo ? bookInfo.dateFrom : ''} readOnly={formReadonly}/>
                    </label>

                    <label className={style.label}>
                        Дата окончания чтения

                        <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                           ref={dateToRef} onChange={onInputChange} value={inputValue}
                                defaultValue={bookInfo ? bookInfo.dateTo : ''} readOnly={formReadonly}/>
                    </label>
                </div>

                {type !== 'view' &&
                    <>
                        <button type='button' className={style.add} onClick={formValidation}>
                            {type === 'add' ? 'Добавить' : 'Сохранить'}
                        </button>

                        {type === 'edit' &&
                            <button className={style.delete} type='button' onClick={deleteBook}>
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