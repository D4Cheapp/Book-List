import React, {useEffect, useRef} from 'react';
import style from './Header.module.scss';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {filterUpdate, updateBooks} from "../../../../redux/saga/actions";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const inputRef = useRef();
    const searchParams = useSearchParams()[0].get('search');

    function searchParamsFilter() {
        if (searchParams === ''){
            navigate('/');
            dispatch(updateBooks());
            inputRef.current.value = '';
        }
        else if (searchParams){
            dispatch(filterUpdate(searchParams));
            inputRef.current.value = searchParams;
        }
    }

    function filterNavigate(event) {
        navigate({pathname: `/`, search: `?search=${event.target.value}`});
    }

    useEffect(() => {
        const filterDelay = setTimeout(searchParamsFilter, 500);
        return () => clearTimeout(filterDelay);
    }, [searchParams]);

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} defaultValue={searchParams} placeholder='Фильтр'
                   type="text" onChange={filterNavigate} ref={inputRef}/>
        </header>
    );
}

export default Header;