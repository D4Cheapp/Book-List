import querystring from "query-string";
import throwFetchError from "../utils/throwFetchError";

//Запрос всех книг с возможностью добавления фильтра
async function asyncGetBooks(filter) {
    let params = filter ? '?' + querystring.stringify({q: filter}) : '';

    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books${params}`)
        .then(response => response.ok ? response : throwFetchError('Ошибка получения книг'))
        .then(res => res.json())
        .catch(error => error);
}

//Запрос книги по ее id
async function asyncGetBookById(bookId){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books/${bookId}`)
        .then(response => response.ok ? response : throwFetchError('Ошибка получения книги по id'))
        .then(res => res.json())
        .catch(error => error);
}

export {asyncGetBooks, asyncGetBookById}