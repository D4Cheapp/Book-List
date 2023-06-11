import React, {useEffect, useRef, useState} from 'react';
import style from './Header.module.scss';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateBooks} from "../../redux/reducer/booksReducer";

//Заголовок со строкой фильтрации
function Header({ setPage, page }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const inputRef = useRef();
    const [inputValue, setInputValue] = useState();
    const filter = useSearchParams()[0].get('search');

    //Фильтрация по параметрам запроса
    function filterSearchParams() {
        if (inputValue === ''){
            navigate('/');
            inputRef.current.value = '';
            setPage(0);
            dispatch(updateBooks());
        }
        else if (inputValue){
            navigate({pathname: `/`, search: `?search=${inputValue}`});
            dispatch(updateBooks({page, filter: inputValue}));
        }
    }

    //Перемещение на ссылку с параметром текущей фильтрации
    function onFilterInput(event) {
        setInputValue(event.target.value);
    }

    //После задержки в 0.5 секунд происходит фильтрация
    useEffect(() => {
        const filterDelay = setTimeout(filterSearchParams, 500);
        return () => clearTimeout(filterDelay);
    }, [inputValue]);

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} defaultValue={filter} placeholder='Фильтр'
                   type="text" onChange={onFilterInput} ref={inputRef}/>
        </header>
    );
}

export default Header;