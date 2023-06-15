import {createSlice} from "@reduxjs/toolkit";
import creatingActionTypes from "../../utils/createActionTypes";

//Редьюсер запросов на сервер
const booksSlice = createSlice({
   name: 'booksSlice',
   initialState: { books: [], book: {}, isLoading: false, error: '', lastPage: 1, page: 1},
   reducers: {
       //Запрос всех книг с сервера
       fetchBooksSuccess(state, data) {
           state.books = state.page === 1 || !state.page?
               [...data.payload.data] : [...state.books, ...data.payload.data];
           const lastPageString = data.payload.pagination.split('_page=').at(-1);
           state.lastPage = +lastPageString.split(lastPageString.indexOf('&') !== -1 ? '&' : '>')[0];
       },

       //Обновление всех книг
       fetchBooks(state, pagination) {
           state.page = pagination?.payload?.page ?? 1;
       },

       //Получение книги по id
       fetchBookByIdSuccess(state, book) {
           state.book = book.payload;
       },

       //Запрос книги по id
       fetchBookById(bookId) {},

       //Изменение состояния загрузки
       changeLoadingState(state, isLoading){
           state.isLoading = isLoading.payload;
       },

       //Изменение состояния ошибки
       setErrorState(state, error){
           state.error = error.payload;
       },

       //Добавление книги
       addBook(bookInfo) {},

       //Запрос на изменение книги
       editBook(bookInfo) {},

       //Запрос на удаление книги
       deleteBook(bookId) {},
   }
});

export const actionTypes = creatingActionTypes(booksSlice.actions);
export const {fetchBooksSuccess, fetchBookByIdSuccess, fetchBooks,
        addBook, setErrorState, deleteBook, editBook, fetchBookById, changeLoadingState} = booksSlice.actions;
export default booksSlice.reducer;