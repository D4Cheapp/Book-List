import querystring from "query-string";

//Запрос на добавление книги
async function asyncAddBook(bookInfo){
    return await fetch('https://my-json-server.typicode.com/D4Cheapp/Book-List/books', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookInfo)
    }).catch((error) => window.location.href = `/#/error-page?${querystring.stringify({error: error.message})}`);
}

//Запрос на удаление книги с сервера
async function asyncDeleteBook(bookID){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books/${bookID}`,
        {method: 'DELETE'}
    ).catch((error) => window.location.href = `/#/error-page?${querystring.stringify({error: error.message})}`);
}

//Запрос на изменение книги
async function asyncEditBook(bookInfo){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books/${bookInfo.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookInfo)
    }).catch((error) => window.location.href = `/#/error-page?${querystring.stringify({error: error.message})}`);
}


export {asyncEditBook, asyncAddBook, asyncDeleteBook}