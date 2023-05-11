import React, {useEffect} from 'react';
import style from './BookList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateBooks} from "../../redux/saga/actions";
import {BookTemplate, Header} from "./components";
import clsx from "clsx";

function BookList() {
    const state = useSelector(state => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(updateBooks());
    }, []);

    return (
        <section className={style.listContainer}>
            <Header/>

            <div className={clsx(style.bookContainer, {[style.bookContainerLoading]: !state})}>
                {state?.at(0) ?
                    <>
                        {state.map(book => <BookTemplate key={book.id} bookInfo={book}/>)}
                    </>
                    :
                    <>
                        {[...Array(7)].map((book, index) => <BookTemplate key={index} loading={true}/>)}
                    </>
                }
            </div>


            <div className={style.buttonContainer}>
                <button className={style.addButton} onClick={() => navigate({
                    pathname: '/book/',
                    search: `type=add`,
                })}/>
            </div>
        </section>
    );
}

export default BookList;