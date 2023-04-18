function addBook(bookInfo) {
    return {type: 'ADD', bookInfo: bookInfo};
}

function editBook(bookInfo) {
    return {type: 'EDIT', bookInfo: bookInfo};
}


function deleteBookAction(bookId) {
    return {type: 'DELETE', id: bookId}
}

function asyncServerRequest(books) {
    return {type: 'ASYNC_SERVER_REQUEST', books: books}
}

function updateBooks() {
    return {type: 'UPDATE_BOOKS'}
}

function asyncBookFilter(filteredBooks) {
    return {type: 'ASYNC_FILTER_BOOK', filteredBooks: filteredBooks}
}

function filterUpdate(filter) {
    return {type: 'FILTER_UPDATE', filter: filter}
}

export {addBook, editBook, deleteBookAction, asyncServerRequest, updateBooks, asyncBookFilter, filterUpdate}