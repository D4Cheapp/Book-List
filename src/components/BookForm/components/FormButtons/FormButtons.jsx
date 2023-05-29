import React, {useContext, useEffect} from 'react';
import style from './FormButtons.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {addBook, changeFormState, deleteBookAction, editBook} from "../../../../redux/reducer/jsonServerReducer";
import {useNavigate} from "react-router-dom";
import {BookFormContext} from "../../../../utils/bookFormContext";

//Кнопки для удаления, сохранения и добавления книг
function FormButtons() {
    const {bookInfo, refs, isAdd, isEdit, bookId,
        setIsDateFromError, setIsDateToError, setIsTitleError} = useContext(BookFormContext);

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
        setIsTitleError(!title.trim());
        //Проверка правильности даты начала чтения
        setIsDateFromError(dateFrom.split('').includes('_'));
        //Проверка правильности даты окончания чтения
        setIsDateToError(dateTo.split('').includes('_'));

        if (dateTo.split('').includes('_') || dateFrom.split('').includes('_') || !title.trim()){
            return false
        }

        const newBookInfo = {
            title: title.replace(/\s+/gm,' ').trim(),
            author: author.replace(/\s+/gm,' ').trim(),
            description: description.replace(/\s+/gm,' ').trim(),
            id: isEdit ? bookInfo.id : Date.now(),
            dateFrom,
            dateTo,
        };

        dispatch(isEdit ? editBook(newBookInfo) : addBook(newBookInfo));
    }

    //Переадресация после отправки формы
    useEffect(() => {
        if (!isLoading && isFormCompleted){
            navigate('/');
            dispatch(changeFormState(false));
        }
    }, [isLoading, isFormCompleted]);

    return (
        <div className={style.buttonContainer}>
            <button type='button' className={style.add} onClick={formValidation}>
                {isAdd ? 'Добавить' : 'Сохранить'}
            </button>

            {isEdit &&
                <button className={style.delete} type='button' onClick={deleteBook}>
                    Удалить
                </button>
            }
        </div>
    );
}

export default FormButtons;