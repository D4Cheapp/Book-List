import querystring from "query-string";
import throwFetchError from "../utils/throwFetchError";

//Запрос всех книг с возможностью добавления фильтра
async function asyncGetBooks(props) {
    const searchParams = querystring.stringify({'_limit': 7, '_page': props?.page, q: props?.filter});
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books?${searchParams}`)
            .then(response => response.ok ? response : throwFetchError('Ошибка получения книг'))
            .then(response => Promise.all([response.json(), response.headers.get('link')]))
            .then(([data, pagination]) => { return { data, pagination, page: props?.page }})
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