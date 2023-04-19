async function asyncGetBooks() {
    return await fetch('http://localhost:3001/books')
        .then(data => data)
            .catch(error => console.error(error));
}

async function asyncFilterBook(filter){
    return await fetch(`http://localhost:3001/books${filter ? `?q=${filter}` : ''}`)
        .then(data => data)
            .catch(error => console.error(error));
}

async function asyncGetBookById(bookId){
    return await fetch(`http://localhost:3001/books/${bookId}`)
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