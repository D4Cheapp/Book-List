import React from 'react';
import style from './FormButtons.module.scss';
import {useDispatch} from "react-redux";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {addBook, asyncUpdateBooks, deleteBookAction, editBook} from "../../../../redux/actions";

function FormButtons({refs, bookInfo}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const type = useSearchParams()[0].get('type');
    const bookId = useParams().bookId;

    function deleteBook() {
        dispatch(deleteBookAction(+bookId));
        dispatch(asyncUpdateBooks());
        navigate('/');
    }

    function formValidation() {
        const title = refs.titleRef.current?.value;
        const description = refs.descriptionRef.current?.value;
        const dateFrom = refs.dateFromRef.current?.value;
        const dateTo = refs.dateToRef.current?.value;

        if (!title.trim()){
            alert('Пожалуйста введите название книги');
            return false
        }

        if ((dateFrom + dateTo).split('').includes('_')){
            alert('Дата введена неверно. Введите дату в формате ДД-ММ-ГГГГ');
            return false
        }

        const newBookInfo = {
            title: title.replace(/\s+/gm,' ').trim(),
            description: description.replace(/\s+/gm,' ').trim(),
            dateFrom: dateFrom,
            dateTo: dateTo,
        };

        newBookInfo.id = type === 'edit' ? bookInfo.id : Date.now();

        dispatch( type ? editBook(newBookInfo) : addBook(newBookInfo));
        dispatch(asyncUpdateBooks());
        navigate('/');
    }

    return (
        <>
            {!!type &&
                <div className={style.buttonContainer}>
                    <button type='button' className={style.add} onClick={formValidation}>
                        {type === 'add' ? 'Добавить' : 'Сохранить'}
                    </button>

                    {type === 'edit' &&
                        <button className={style.delete} type='button' onClick={deleteBook}>
                            Удалить
                        </button>
                    }
                </div>
            }
        </>
    );
}

export default FormButtons;