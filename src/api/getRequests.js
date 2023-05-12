//Запрос всех книг
async function asyncGetBooks() {
    return await fetch('https://my-json-server.typicode.com/D4Cheapp/Book-List/books')
        .then(data => data)
            .catch(error => console.error(error));
}

//Запрос книг по заданному фильтру
async function asyncFilterBook(filter){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books${filter ? `?q=${filter}` : ''}`)
        .then(data => data)
            .catch(error => console.error(error));
}

//Запрос книги по ее id
async function asyncGetBookById(bookId){
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books/${bookId}`)
        .then(data => {
            if (data.status !== 404){
                return data
            }
            else{
                window.location.replace('/#/404')
            }
        }).catch(error => console.error(error));
}

export {asyncGetBooks, asyncFilterBook, asyncGetBookById}