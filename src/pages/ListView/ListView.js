import React from 'react';
import style from './ListView.module.scss';
import {useSelector} from "react-redux";
import {Header} from "./Header";
import {useNavigate, useSearchParams} from "react-router-dom";
import {BookTemplate} from "./BookTemplate";

function ListView() {
    const state = useSelector(state => state);

    const navigate = useNavigate();
    const filter = useSearchParams()[0].get('search');

    return (
        <section className={style.listContainer}>
            <Header/>

            <div className={style.bookContainer}>
                {state.map(book => { return book.title.includes(filter) || !filter ?
                    <BookTemplate key={book.id} bookInfo={book}/> : ''})}
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

export default ListView;