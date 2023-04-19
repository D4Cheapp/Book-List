function addBook(bookInfo) {
    return {type: 'ADD', bookInfo: bookInfo};
}

function editBook(bookInfo) {
    return {type: 'EDIT', bookInfo: bookInfo};
}


function deleteBookAction(bookId) {
    return {type: 'DELETE', id: bookId}
}

function serverRequest(books) {
    return {type: 'ASYNC_SERVER_REQUEST', books: books}
}

function bookFilter(filteredBooks) {
    return {type: 'ASYNC_FILTER_BOOKS', filteredBooks: filteredBooks}
}

function updateBooks() {
    return {type: 'UPDATE_BOOKS'}
}

function filterUpdate(filter) {
    return {type: 'FILTER_UPDATE', filter: filter}
}

function getBookById(bookId) {
    return {type: 'GET_BOOK', bookId: bookId}
}

function bookIdRequest(book) {
    return {type: 'ASYNC_GET_BOOK', book: book}
}

export {addBook, editBook, deleteBookAction, serverRequest,
    updateBooks, bookFilter, filterUpdate, getBookById, bookIdRequest}