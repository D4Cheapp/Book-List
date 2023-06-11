import querystring from "query-string";
import throwFetchError from "../utils/throwFetchError";

//Запрос всех книг с возможностью добавления фильтра
async function asyncGetBooks(data) {
    const searchParams = querystring.stringify({'_limit': 7, '_page': data?.page, q: data?.filter});
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books?${searchParams}`)
            .then(response => response.ok ? response : throwFetchError('Ошибка получения книг'))
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