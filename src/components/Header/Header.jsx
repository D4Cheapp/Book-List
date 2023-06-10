import React, {useEffect, useRef} from 'react';
import style from './Header.module.scss';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateFilter, updateBooks} from "../../redux/reducer/jsonServerReducer";

//Заголовок со строкой фильтрации
function Header({setPage}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const inputRef = useRef();
    const searchParams = useSearchParams()[0].get('search');

    //Фильтрация по параметрам запроса
    function filterSearchParams() {
        if (searchParams === ''){
            navigate('/');
            inputRef.current.value = '';
            setPage(0);
            dispatch(updateBooks( {page: 0, replace: true}));
        }
        else if (searchParams){
            dispatch(updateFilter(searchParams));
            inputRef.current.value = searchParams;
        }
    }

    //Перемещение на ссылку с параметром текущей фильтрации
    function onFilterInput(event) {
        navigate({pathname: `/`, search: `?search=${event.target.value}`});
    }

    //После задержки в 0.5 секунд происходит фильтрация
    useEffect(() => {
        const filterDelay = setTimeout(filterSearchParams, 500);
        return () => clearTimeout(filterDelay);
    }, [searchParams]);

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} defaultValue={searchParams} placeholder='Фильтр'
                   type="text" onChange={onFilterInput} ref={inputRef}/>
        </header>
    );
}

export default Header;