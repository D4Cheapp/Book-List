import React, {useEffect} from 'react';
import style from './BookList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {updateBooks} from "../../redux/actions";
import {BookTemplate} from "./BookTemplate";
import {useSearchParams} from "react-router-dom";
import clsx from "clsx";

//Контейнер с книгами
function BookList() {
    const state = useSelector(state => state);
    const searchParams = useSearchParams()[0].get('search');
    const dispatch = useDispatch();

    //Загрузка книг при рендере компонента
    useEffect(() => {
        dispatch(updateBooks());
    }, []);

    return (
        <div className={clsx(style.bookContainer, {[style.bookContainerLoading]: !state})}>
            {state?.length > 0 ?
                <>
                    {state.map(book => <BookTemplate key={book.id} bookInfo={book}/>)}
                </>
                :
                <>
                    {searchParams ?
                        <div className={style.errorContainer}>
                            <p className={style.searchError}>По фильтру {searchParams} ничего не найдено</p>
                        </div>
                        :
                        //Заполнение пустыми книгами для загрузки
                        [...Array(7)].map((book, index) => <BookTemplate key={index} loading={true}/>)
                    }
                </>
            }
        </div>
    );
}

export default BookList;