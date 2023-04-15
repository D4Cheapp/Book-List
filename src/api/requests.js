async function asyncGetBooks() {
    return await fetch('http://localhost:3001/books')
        .then(data => data)
            .catch(error => console.error(error));
}

async function asyncAddBook(bookInfo){
    return await fetch('http://localhost:3001/books', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookInfo)
    }).catch(error => console.error(error));
}

async function asyncDeleteBook(bookID){
    return await fetch(`http://localhost:3001/books/${bookID}`,
        {method: 'DELETE'}
    ).catch(error => console.error(error));
}

async function asyncEditBook(bookInfo){
    return await fetch(`http://localhost:3001/books/${bookInfo.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookInfo)
    }).catch(error => console.error(error));
}

export {asyncGetBooks, asyncEditBook, asyncAddBook, asyncDeleteBook}