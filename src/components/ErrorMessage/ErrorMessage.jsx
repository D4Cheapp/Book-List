import React from 'react';
import style from './ErrorMessage.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setErrorState} from "../../redux/reducer/jsonServerReducer";

//Окно ошибки
function ErrorMessage(){
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    //Закрытие окна
    function closeError() {
        dispatch(setErrorState(''));
    }

    return (
        <div className={style.container}>

            <div className={style.errorContainer}>
                <p className={style.error}>
                    {error}
                </p>

                <button className={style.close} onClick={closeError}/>
            </div>

        </div>
    );
}

export default ErrorMessage;