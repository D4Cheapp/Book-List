import {createSlice} from "@reduxjs/toolkit";
import creatingActionTypes from "../../utils/createActionTypes";

//Редьюсер запросов на сервер
const booksSlice = createSlice({
   name: 'booksSlice',
   initialState: { books: [], book: {}, isLoading: false, isFormCompleted: false, error: '', maxPage: 1 },
   reducers: {
        //Запрос всех книг с сервера
        fetchBooks(state, data) {
            const replace = data.payload.replace;
            state.books = replace ? [...data.payload.data] : [...state.books, ...data.payload.data];
            state.maxPage = +data.payload.totalCount;
        },

        //Обновление всех книг
        updateBooks(state, pagination) {
            state.page = pagination.payload.page;
        },

        //Запрос книг по фильтру
        fetchFilteredBooks(state, filteredBooks) {
            state.books = [...filteredBooks.payload.data];
        },

        //Получение книг по фильтру
        updateFilter(state, filter) {
            state.filter = filter.payload;
        },

        //Запрос книги по id
        fetchBookById(state, bookId) {
            state.bookId = bookId.payload;
        },

        //Получение книги по id
        getBookById(state, book) {
            state.book = book.payload;
        },

        //Добавление книги
        addBook(state, bookInfo) {
            state.bookInfo = bookInfo.payload;
        },

        //Запрос на изменение книги
        editBook(state, bookInfo) {
            state.bookInfo = bookInfo.payload;
        },

        //Запрос на удаление книги
        deleteBook(state, bookId) {
            state.id = bookId.payload;
        },

        //Изменение состояния загрузки
        changeLoadingState(state, isLoading){
            state.isLoading = isLoading.payload;
        },

        //Изменение состояния заполнения формы
        changeFormState(state, isFormCompleted){
            state.isFormCompleted = isFormCompleted.payload;
        },

        //Изменение состояния ошибки
        setErrorState(state, error){
            state.error = error.payload;
        },
   }
});

export const actionTypes = creatingActionTypes(booksSlice.actions);
export const {fetchBooks, fetchFilteredBooks, getBookById, updateBooks,
    updateFilter, changeFormState, addBook, setErrorState, deleteBook,
        editBook, fetchBookById, changeLoadingState} = booksSlice.actions;
export default booksSlice.reducer;