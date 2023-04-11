import React from 'react';
import style from './Header.module.scss';

function Header() {
    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} placeholder='Фильтр' type="text"/>
        </header>
    );
}

export default Header;