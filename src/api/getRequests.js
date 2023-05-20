import querystring from "query-string";

//Запрос всех книг с возможностью добавления фильтра
async function asyncGetBooks(filter) {
    let params = filter ? '?' + querystring.stringify({q: filter}) : '';
    return await fetch(`https://my-json-server.typicode.com/D4Cheapp/Book-List/books${params}`)
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

export {asyncGetBooks, asyncGetBookById}