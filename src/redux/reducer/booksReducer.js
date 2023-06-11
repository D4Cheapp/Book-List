import {createSlice} from "@reduxjs/toolkit";
import creatingActionTypes from "../../utils/createActionTypes";

//Редьюсер запросов на сервер
const booksSlice = createSlice({
   name: 'booksSlice',
   initialState: { books: [], book: {}, isLoading: false,
                    isFormCompleted: false, error: '', lastPage: 1, page: 0},
   reducers: {
        //Запрос всех книг с сервера
        fetchBooks(state, data) {
            state.books = state.page === 1 || !state.page?
                [...data.payload.data] : [...state.books, ...data.payload.data];
            state.lastPage = +data.payload.totalCount;
        },

        //Обновление всех книг
        updateBooks(state, pagination) {
            state.page = pagination?.payload?.page ?? 0;
        },

        //Получение книги по id
        getBookById(state, book) {
            state.book = book.payload;
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

        //Запрос книги по id
        fetchBookById(state, bookId) {},

        //Добавление книги
        addBook(state, bookInfo) {},

        //Запрос на изменение книги
        editBook(state, bookInfo) {},

        //Запрос на удаление книги
        deleteBook(state, bookId) {},
   }
});

export const actionTypes = creatingActionTypes(booksSlice.actions);
export const {fetchBooks, getBookById, updateBooks,
        changeFormState, addBook, setErrorState, deleteBook,
        editBook, fetchBookById, changeLoadingState} = booksSlice.actions;
export default booksSlice.reducer;