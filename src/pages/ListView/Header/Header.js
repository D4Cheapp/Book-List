import React, {useEffect, useState} from 'react';
import style from './Header.module.scss';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {filterUpdate} from "../../../redux/actions/actions";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [filter, setFilter] = useState();

    function filtering() {
        navigate({pathname: `/`, search: `?search=${filter}`});
        dispatch(filterUpdate(filter));
    }

    function setFilterText(event) {
        setFilter(event.target.value)
    }

    useEffect(() => {
        const filterDelay = setTimeout(filtering, 500);
        return () => clearTimeout(filterDelay);
    }, [filter]);

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} placeholder='Фильтр' type="text" onChange={setFilterText}/>
        </header>
    );
}

export default Header;