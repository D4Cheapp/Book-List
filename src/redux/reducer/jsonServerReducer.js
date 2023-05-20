import {createSlice} from "@reduxjs/toolkit";
import creatingActionTypes from "../../utils/creatingActionTypes";

//Редьюсер запросов на сервер
const jsonBookServerSlice = createSlice({
   name: 'jsonBookServer',
   initialState: {books: [], book: {}, type: ''},
   reducers: {
        //Запрос всех книг с сервера
        allBooksRequest(state, books) {
            return { ...state, books: books.payload };
        },

        //Запрос книг по фильтру
        bookFilterRequest(state, filteredBooks) {
            return { ...state, books: filteredBooks.payload };
        },

        //Запрос книги по id
        bookByIdRequest(state, book) {
            return { ...state, book: book.payload };
        },

        //Обновление всех книг
        updateBooks(state) {
            return { ...state, type: 'UPDATE_BOOKS' };
        },

        //Запрос книг по фильтру
        filterUpdate(state, filter) {
            return { ...state, type: 'FILTER_UPDATE_TYPE', filter: filter.payload };
        },

        //Запрос книги по id
        getBookById(state, bookId) {
            return { ...state, type: 'GET_BOOK_BY_ID_TYPE', bookId: bookId.payload };
        },

        //Добавление книги
        addBook(state, bookInfo) {
            return { ...state, type: 'ADD_TYPE', bookInfo: bookInfo.payload };
        },

        //Запрос на изменение книги
        editBook(state, bookInfo) {
            return { ...state, type: 'EDIT_TYPE', bookInfo: bookInfo.payload };
        },

        //Запрос на удаление книги
        deleteBookAction(state, bookId) {
            return { ...state, type: 'DELETE_TYPE', id: bookId.payload };
        },
   }
});

export const actionTypes = creatingActionTypes(jsonBookServerSlice.actions);
export const {allBooksRequest, bookFilterRequest, bookByIdRequest, updateBooks, filterUpdate,
    addBook, deleteBookAction, editBook, getBookById} = jsonBookServerSlice.actions;
export default jsonBookServerSlice.reducer;