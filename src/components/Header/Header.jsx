import React, {useEffect, useState} from 'react';
import style from './Header.module.scss';
import {useNavigate, useSearchParams} from "react-router-dom";

//Заголовок со строкой фильтрации
function Header() {
    const navigate = useNavigate();
    const filter = useSearchParams()[0].get('search') ?? '';
    const [filterInputValue, setFilterInputValue] = useState(filter);

    function onFilterInputChange(event) {
        setFilterInputValue(event.target.value)
    }

    function applyFilter() {
        navigate({pathname: `/`, search: filterInputValue ? `?search=${filterInputValue}` : ''});
    }

    //После задержки в 0.5 секунд происходит фильтрация
    useEffect(() => {
        const filterDelay = setTimeout(applyFilter, 500);
        return () => clearTimeout(filterDelay);
    }, [filterInputValue]);

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} defaultValue={filterInputValue}
                   onChange={onFilterInputChange} placeholder='Фильтр' type="text"/>
        </header>
    );
}

export default Header;