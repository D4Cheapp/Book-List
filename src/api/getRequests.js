import querystring from "query-string";
import throwFetchError from "../utils/throwFetchError";

//Запрос всех книг с возможностью добавления фильтра
async function asyncGetBooks(filter, page) {
    const paginationParams = '?' + querystring.stringify({'_limit': 5, '_page': page});
    const filterParams = filter ? '&' + querystring.stringify({q: filter}) : '';

    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/` +
        `books${paginationParams + filterParams}`)
            .then(response => Promise.all([response.json(), response.headers.get('x-total-count')]))
            .then(([data, totalCount]) => { return { data, totalCount }})
            .catch(error => error)
}

//Запрос книги по ее id
async function asyncGetBookById(bookId){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books/${bookId}`)
        .then(response => response.ok ? response : throwFetchError('Ошибка получения книги по id'))
        .then(res => res.json())
        .catch(error => error);
}

export {asyncGetBooks, asyncGetBookById}