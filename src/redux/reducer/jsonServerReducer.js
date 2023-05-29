import {createSlice} from "@reduxjs/toolkit";
import creatingActionTypes from "../../utils/creatingActionTypes";

//Редьюсер запросов на сервер
const jsonBookServerSlice = createSlice({
   name: 'jsonBookServer',
   initialState: {books: [], book: {}, isLoading: false, isFormCompleted: false, error: '', maxPage: 1},
   reducers: {
        //Запрос всех книг с сервера
        allBooksRequest(state, data) {
            const books = [...state.books, ...data.payload.data];
            const maxPage = +data.payload.totalCount;
            return { ...state, books, maxPage };
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
        updateBooks(state, pagination) {
            return { ...state, page: pagination.payload.page, limit: pagination.payload.limit};
        },

        //Запрос книг по фильтру
        filterUpdate(state, filter) {
            return { ...state, filter: filter.payload };
        },

        //Запрос книги по id
        getBookById(state, bookId) {
            return { ...state, bookId: bookId.payload };
        },

        //Добавление книги
        addBook(state, bookInfo) {
            return { ...state, bookInfo: bookInfo.payload };
        },

        //Запрос на изменение книги
        editBook(state, bookInfo) {
            return { ...state, bookInfo: bookInfo.payload };
        },

        //Запрос на удаление книги
        deleteBookAction(state, bookId) {
            return { ...state, id: bookId.payload };
        },

        //Изменение состояния загрузки
        changeLoadingState(state, isLoading){
            return { ...state, isLoading: isLoading.payload }
        },

        //Изменение состояния заполнения формы
        changeFormState(state, isFormCompleted){
            return { ...state, isFormCompleted: isFormCompleted.payload }
        },

        //Изменение состояния ошибки
        setErrorState(state, error){
            return { ...state, error: error.payload }
        },
   }
});

export const actionTypes = creatingActionTypes(jsonBookServerSlice.actions);
export const {allBooksRequest, bookFilterRequest, bookByIdRequest, updateBooks,
    filterUpdate, changeFormState, addBook, setErrorState, deleteBookAction,
        editBook, getBookById, changeLoadingState} = jsonBookServerSlice.actions;
export default jsonBookServerSlice.reducer;