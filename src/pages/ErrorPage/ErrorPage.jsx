import React from 'react';
import style from './ErrorPage.module.scss';
import {useNavigate} from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    function onBackClick() {
        navigate('/');
    }

    return (
        <div className={style.container}>
            <p className={style.title}>
                Страница не найдена
            </p>

            <button className={style.button} onClick={onBackClick}>
                Вернуться на главную страницу
            </button>
        </div>
    );
}

export default ErrorPage;