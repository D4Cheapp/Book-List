import React from 'react';
import style from './ErrorPage.module.scss';
import {useNavigate} from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div>
            <p className={style.title}>
                Страница не найдена
            </p>

            <button className={style.button} onClick={() => navigate('/')}>
                Вернуться на главную страницу
            </button>
        </div>
    );
}

export default ErrorPage;