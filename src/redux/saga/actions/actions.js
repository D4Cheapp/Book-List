function updateBooks() {
    return {type: 'UPDATE_BOOKS'}
}

function filterUpdate(filter) {
    return {type: 'FILTER_UPDATE', filter: filter}
}

function getBookById(bookId) {
    return {type: 'GET_BOOK', bookId: bookId}
}

function addBook(bookInfo) {
    return {type: 'ADD', bookInfo: bookInfo};
}

function editBook(bookInfo) {
    return {type: 'EDIT', bookInfo: bookInfo};
}

function deleteBookAction(bookId) {
    return {type: 'DELETE', id: bookId}
}

export {updateBooks, addBook, editBook, deleteBookAction,filterUpdate, getBookById, }