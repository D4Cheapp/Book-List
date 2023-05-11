const UPDATE_BOOKS_TYPE = 'UPDATE_BOOKS';
const FILTER_UPDATE_TYPE = 'FILTER_UPDATE';
const GET_BOOK_BY_ID_TYPE = 'GET_BOOK_BY_ID';
const ADD_TYPE = 'ADD';
const EDIT_TYPE = 'EDIT';
const DELETE_TYPE = 'DELETE';

function updateBooks() {
    return {type: 'UPDATE_BOOKS'}
}

function filterUpdate(filter) {
    return {type: 'FILTER_UPDATE', filter: filter}
}

function getBookById(bookId) {
    return {type: 'GET_BOOK_BY_ID', bookId: bookId}
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

export {ADD_TYPE, EDIT_TYPE, DELETE_TYPE, GET_BOOK_BY_ID_TYPE, FILTER_UPDATE_TYPE, UPDATE_BOOKS_TYPE}
export {updateBooks, addBook, editBook, deleteBookAction,filterUpdate, getBookById, }