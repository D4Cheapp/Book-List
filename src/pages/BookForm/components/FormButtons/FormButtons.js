import React, {useEffect} from 'react';
import style from './FormButtons.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {addBook, deleteBookAction, editBook} from "../../../../redux/reducer/jsonServerReducer";
import {useNavigate} from "react-router-dom";

//Кнопки для удаления, сохранения и добавления книг
function FormButtons({refs, bookInfo, type, bookId}) {
    const isLoading = useSelector(state => state.isLoading);
    const isFormCompleted = useSelector(state => state.isFormCompleted);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Удаление книги
    function deleteBook() {
        dispatch(deleteBookAction(+bookId));
    }

    //Валидация при добавлении новой книги
    function formValidation() {
        const title = refs.titleRef.current?.value;
        const description = refs.descriptionRef.current?.value;
        const author = refs.authorRef.current?.value;
        const dateFrom = refs.dateFromRef.current?.value;
        const dateTo = refs.dateToRef.current?.value;

        //Проверка правильности названия
        if (!title.trim()){
            alert('Пожалуйста введите название книги');
            return false
        }

        //Проверка правильности дат
        if ((dateFrom + dateTo).split('').includes('_')){
            alert('Дата введена неверно. Введите дату в формате ДД-ММ-ГГГГ');
            return false
        }

        const isEditType = type === 'edit';
        const newBookInfo = {
            title: title.replace(/\s+/gm,' ').trim(),
            author: author.replace(/\s+/gm,' ').trim(),
            description: description.replace(/\s+/gm,' ').trim(),
            dateFrom,
            dateTo,
            id: isEditType ? bookInfo.id : Date.now(),
        };

        dispatch(isEditType ? editBook(newBookInfo) : addBook(newBookInfo));
    }

    //Переадресация после отправки формы
    useEffect(() => {
        if (!isLoading && isFormCompleted){
            navigate('/');
        }
    }, [isLoading, isFormCompleted]);

    return (
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
    );
}

export default FormButtons;