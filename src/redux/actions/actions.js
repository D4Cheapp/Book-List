function addBook(bookInfo) {
    return {type: 'ADD', bookInfo: bookInfo};
}

function editBook(bookInfo) {
    return {type: 'EDIT', bookInfo: bookInfo};
}


function deleteBookAction(bookId) {
    return {type: 'DELETE', id: bookId}
}

function asyncServerAdd(books) {
    return {type: 'ASYNC_SERVER_ADD', books: books}
}

function asyncUpdateBooks() {
    return {type: 'UPDATE_BOOKS'}
}

export {addBook, editBook, deleteBookAction, asyncServerAdd, asyncUpdateBooks}