const UPDATE_BOOKS_TYPE = 'UPDATE_BOOKS';
const FILTER_UPDATE_TYPE = 'FILTER_UPDATE';
const GET_BOOK_BY_ID_TYPE = 'GET_BOOK_BY_ID';
const ADD_TYPE = 'ADD';
const EDIT_TYPE = 'EDIT';
const DELETE_TYPE = 'DELETE';

function updateBooks() {
    return {type: 'UPDATE_BOOKS'}
}

//Запрос книг по фильтру
function filterUpdate(filter) {
    return {type: FILTER_UPDATE_TYPE, filter: filter}
}

//Запрос книги по id
function getBookById(bookId) {
    return {type: GET_BOOK_BY_ID_TYPE, bookId: bookId}
}

//Добавление книги
function addBook(bookInfo) {
    return {type: ADD_TYPE, bookInfo: bookInfo};
}

//Запрос на изменение книги
function editBook(bookInfo) {
    return {type: EDIT_TYPE, bookInfo: bookInfo};
}

//Запрос на удаление книги
function deleteBookAction(bookId) {
    return {type: DELETE_TYPE, id: bookId}
}

export {ADD_TYPE, EDIT_TYPE, DELETE_TYPE, GET_BOOK_BY_ID_TYPE, FILTER_UPDATE_TYPE, UPDATE_BOOKS_TYPE}
export {updateBooks, addBook, editBook, deleteBookAction,filterUpdate, getBookById, }