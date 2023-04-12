import React, {useRef, useState} from 'react';
import style from './ListView.module.scss';
import {useSelector} from "react-redux";
import {BookForm, BookTemplate, Header} from "./components";

function ListView() {
    const state = useSelector(state => state);

    //hide - форма скрыта
    //edit - редактирование
    //add - добавление
    //view - просмотр
    const [formState, setFormState] = useState(['hide', null]);

    const bookContainerRef = useRef();

    return (
        <section className={style.listContainer}>
            <Header bookContainerRef={bookContainerRef}/>

            <div className={style.bookContainer} ref={bookContainerRef}>
                {state.map(book => <BookTemplate key={book.id} bookInfo={book} setFormState={setFormState}/>)}
            </div>

            <BookForm formState={formState} setFormState={setFormState}/>

            <div className={style.buttonContainer}>
                <button className={style.button} onClick={() => setFormState(['add', null])}/>
            </div>
        </section>
    );
}

export default ListView;