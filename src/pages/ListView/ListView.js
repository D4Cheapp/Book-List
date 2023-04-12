import React, {useRef} from 'react';
import style from './ListView.module.scss';
import {useSelector} from "react-redux";
import {Header} from "./Header";
import {useNavigate} from "react-router-dom";
import {BookTemplate} from "./BookTemplate";

function ListView() {
    const state = useSelector(state => state);

    const bookContainerRef = useRef();

    const navigate = useNavigate();

    return (
        <section className={style.listContainer}>
            <Header bookContainerRef={bookContainerRef}/>

            <div className={style.bookContainer} ref={bookContainerRef}>
                {state.map(book => <BookTemplate key={book.id} bookInfo={book}/>)}
            </div>

            <div className={style.buttonContainer}>
                <button className={style.addButton} onClick={() => navigate('/form/add')}/>
            </div>
        </section>
    );
}

export default ListView;