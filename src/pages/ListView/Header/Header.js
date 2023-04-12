import React from 'react';
import style from './Header.module.scss';
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} placeholder='Фильтр' type="text" onInput={(event) =>
                navigate({pathname: `/`, search: `?search=${event.target?.value}`,})}/>
        </header>
    );
}

export default Header;