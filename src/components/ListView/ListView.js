import React, {useState} from 'react';
import style from './ListView.module.scss';
import {useSelector} from "react-redux";
import {BookForm, BookTemplate} from "./components";

function ListView() {
    const state = useSelector(state => state);

    //hide - форма скрыта
    //edit - редактирование
    //add - добавление
    //view - просмотр
    const [formState, setFormState] = useState(['hide', null]);

    return (
        <section className={style.list}>
            {state.map(book => <BookTemplate key={book.id} bookInfo={book} setFormState={setFormState}/>)}

            <BookForm formState={formState} setFormState={setFormState}/>

            <button className={style.button} onClick={() => setFormState(['add', null])}/>
        </section>
    );
}

export default ListView;