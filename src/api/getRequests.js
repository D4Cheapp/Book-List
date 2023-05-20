import querystring from "query-string";

//Функция для возвращения ошибки
function throwError(message) {
    throw new Error(message)
}

//Запрос всех книг с возможностью добавления фильтра
async function asyncGetBooks(filter) {
    let params = filter ? '?' + querystring.stringify({q: filter}) : '';

    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books${params}`)
        .then((response) => response.ok ? response : throwError('Ошибка получения книг')).then(res => res.json())
        .catch((error) => window.location.href = `/#/error-page?${querystring.stringify({error: error.message})}`);
}

//Запрос книги по ее id
async function asyncGetBookById(bookId){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books/${bookId}`)
        .then((response) => response.ok ? response : throwError('Ошибка получения книги по id')).then(res => res.json())
        .catch((error) => window.location.href = `/#/error-page?${querystring.stringify({error: error.message})}`);
}

export {asyncGetBooks, asyncGetBookById}