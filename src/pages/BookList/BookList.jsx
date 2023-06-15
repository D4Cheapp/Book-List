import React, {useEffect, useRef, useState} from 'react';
import style from './BookList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {BookTemplate} from "./BookTemplate";
import {useNavigate, useSearchParams} from "react-router-dom";
import clsx from "clsx";
import {fetchBooks} from "../../redux/reducer/booksReducer";
import {AddBookButton, Header} from "../../components";

//Контейнер с книгами
function BookList() {
    const books = useSelector(state => state.books);
    const isLoading = useSelector(state => state.isLoading);
    const lastPage = useSelector(state => state.lastPage);

    const filter = useSearchParams()[0].get('search');
    const bookListRef = useRef();

    //Состояние пагинации и прокрутки страницы
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onBookScroll(element){
        const scrollHeight = element.currentTarget.scrollHeight;
        const scrollTop = element.currentTarget.scrollTop;
        const innerHeight = element.currentTarget.offsetHeight;

        if (scrollHeight - (scrollTop + innerHeight) < 20 && !isLoading && page < lastPage){
            setPage(page + 1);
        }
    }

    //Загрузка книг при рендере компонента
    useEffect(() => {
        dispatch(fetchBooks({page, filter}));
    }, []);

    //Загрузка книг при рендере компонента
    useEffect(() => {
        if (page > 1 && !isLoading){
            dispatch(fetchBooks({page, filter}));
        }
    }, [page]);

    useEffect(() => {
        if (filter === ''){
            navigate('/');
            bookListRef.current.scrollTop = 0;
            dispatch(fetchBooks({page: 1}));
        }
        else if (filter){
            bookListRef.current.scrollTop = 0;
            navigate({pathname: `/`, search: `?search=${filter}`});
            dispatch(fetchBooks({page: 1, filter: filter}));
        }
    }, [filter]);

    return (
        <section className={style.listContainer}>
            <Header/>

            <div className={clsx(style.bookContainer,
                {[style.bookContainerLoading]: !books})} onScroll={onBookScroll} ref={bookListRef}>

                {books?.length > 0 ?
                    <>
                        {books?.map(book => <BookTemplate key={book.id} bookInfo={book}/>)}
                    </>
                    :
                    <>
                        {//Если идет загрузка книг
                            isLoading ?
                            //Заполнение пустыми книгами для загрузки
                            [...Array(7)].map((book, index) => <BookTemplate key={index} loading={true}/>)
                            :
                            //Если книг нет, но присутствует фильтрация
                            filter ?
                                <div className={style.errorContainer}>
                                    <p className={style.error}>По фильтру {filter} ничего не найдено</p>
                                </div>
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