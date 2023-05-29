import React, {useEffect, useRef} from 'react';
import style from './Header.module.scss';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {filterUpdate} from "../../redux/reducer/jsonServerReducer";

//Заголовок со строкой фильтрации
function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const inputRef = useRef();
    const searchParams = useSearchParams()[0].get('search');

    //Фильтрация по параметрам запроса
    function searchParamsFilter() {
        if (searchParams === ''){
            navigate('/');
            inputRef.current.value = '';
        }
        else if (searchParams){
            dispatch(filterUpdate(searchParams));
            inputRef.current.value = searchParams;
        }
    }

    //Перемещение на ссылку с параметром текущей фильтрации
    function filterNavigate(event) {
        navigate({pathname: `/`, search: `?search=${event.target.value}`});
    }

    //После задержки в 0.5 секунд происходит фильтрация
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