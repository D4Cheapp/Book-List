import React from 'react';
import style from './Header.module.scss';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {filterUpdate} from "../../../redux/actions/actions";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function filtering(event) {
        const filter = event.target?.value;
        navigate({pathname: `/`, search: `?search=${filter}`});
        dispatch(filterUpdate(filter));
    }

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} placeholder='Фильтр' type="text" onInput={filtering}/>
        </header>
    );
}

export default Header;