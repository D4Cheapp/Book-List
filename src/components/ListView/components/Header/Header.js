import React from 'react';
import style from './Header.module.scss';

function Header({bookContainerRef}) {
    function bookFiltering(event) {
        const books = bookContainerRef.current.childNodes;

        for (let book of books) {
            const bookTitle = book.firstChild.firstChild.textContent;

            if (bookTitle.includes(event.target.value)){
                book.setAttribute('style', 'display: inline-flex')
            }
            else {
                book.setAttribute('style', 'display: none')
            }
        }
    }

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Book list
            </h1>

            <input className={style.input} placeholder='Фильтр' type="text" onInput={bookFiltering}/>
        </header>
    );
}

export default Header;