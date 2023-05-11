import React from 'react';
import {AddBookButton, Header} from "./components";
import {BookList} from "./pages";
import style from "./App.module.scss";

function App() {
    return (
        <section className={style.listContainer}>
            <Header/>
            <BookList/>
            <AddBookButton/>
        </section>
    );
}

export default App;