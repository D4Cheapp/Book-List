import React, {useEffect} from 'react';
import style from './BookList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {BookTemplate} from "./BookTemplate";
import {useSearchParams} from "react-router-dom";
import clsx from "clsx";
import {updateBooks} from "../../redux/reducer/jsonServerReducer";
import {AddBookButton, Header} from "../../components";

//Контейнер с книгами
function BookList() {
    const books = useSelector(state => state.books);
    const isLoading = useSelector(state => state.isLoading);

    const searchParams = useSearchParams()[0].get('search');
    const dispatch = useDispatch();

    //Загрузка книг при рендере компонента
    useEffect(() => {
        dispatch(updateBooks());
    }, []);

    return (
        <section className={style.listContainer}>
            <Header/>

            <div className={clsx(style.bookContainer, {[style.bookContainerLoading]: !books})}>
                {/*Если состояние книг не пустое*/}
                {books?.length > 0 ?
                    <>
                        {books?.map(book => <BookTemplate key={book.id} bookInfo={book}/>)}
                    </>
                    :
                    <>
                        {/*Если книг нет, но присутствует фильтрация*/}
                        {searchParams ?
                            <div className={style.errorContainer}>
                                <p className={style.error}>По фильтру {searchParams} ничего не найдено</p>
                            </div>
                            :
                            //Если идет загрузка книг
                            isLoading ?
                                //Заполнение пустыми книгами для загрузки
                                [...Array(7)].map((book, index) => <BookTemplate key={index} loading={true}/>)
                                :
                                <div className={style.errorContainer}>
                                    <p className={style.error}>Ничего не найдено</p>
                                </div>

                        }
                    </>
                }
            </div>

            <AddBookButton/>
        </section>

    );
}

export default BookList;