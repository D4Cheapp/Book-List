import React from 'react';
import style from './ErrorMessage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setErrorState} from "../../redux/reducer/booksReducer";

//Окно ошибки
function ErrorMessage(){
    const error = useSelector(state => state.book.error);
    const dispatch = useDispatch();

    if (!error) return null;

    //Закрытие окна
    function onCloseClick() {
        dispatch(setErrorState(''));
    }

    return (
        <div className={style.container}>
            <div className={style.errorContainer}>
                <p className={style.error}>
                    {error}
                </p>

                <button className={style.close} onClick={onCloseClick}/>
            </div>
        </div>
    );
}

export default ErrorMessage;