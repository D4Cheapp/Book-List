import throwFetchError from "../utils/throwFetchError";

//Запрос на добавление книги
async function asyncAddBook(bookInfo){
    return await fetch('https://my-json-server.typicode.com/D4Cheapp/Book-List/books', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookInfo)
    })
        .then(response => response.ok ? response : throwFetchError('Ошибка добавления книги'))
        .catch(error => error);
}

//Запрос на удаление книги с сервера
async function asyncDeleteBook(bookID){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books/${bookID}`,
        {method: 'DELETE'}
    )
        .then(response => response.ok ? response : throwFetchError('Ошибка удаления книги'))
        .catch(error => error);
}

//Запрос на изменение книги
async function asyncEditBook(bookInfo){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books/${bookInfo.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookInfo)
    })
        .then(response => response.ok ? response : throwFetchError('Ошибка изменения книги'))
        .catch(error => error);
}


export {asyncEditBook, asyncAddBook, asyncDeleteBook}