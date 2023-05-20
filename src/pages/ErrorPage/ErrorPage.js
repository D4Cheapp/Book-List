import React from 'react';
import style from './ErrorPage.module.scss';
import {useNavigate, useSearchParams} from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();
    const params = useSearchParams()[0].get('error') || 'Ошибка';

    return (
        <div className={style.container}>
            <p className={style.title}>
                {params}
            </p>

            <button className={style.button} onClick={() => navigate('/')}>
                Вернуться на главную страницу
            </button>
        </div>
    );
}

export default ErrorPage;