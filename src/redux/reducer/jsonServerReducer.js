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
            const books = replace ? [...data.payload.data] : [...state.books, ...data.payload.data];
            const maxPage = +data.payload.totalCount;
            return { ...state, books, maxPage };
        },

        //Обновление всех книг
        updateBooks(state, pagination) {
            return { ...state, page: pagination.payload.page};
        },

        //Запрос книг по фильтру
        fetchFilteredBooks(state, filteredBooks) {
            return { ...state, books: [...filteredBooks.payload.data] };
        },

        //Получение книг по фильтру
        updateFilter(state, filter) {
            return { ...state, filter: filter.payload };
        },

        //Запрос книги по id
        fetchBookById(state, bookId) {
            return { ...state, bookId: bookId.payload };
        },

        //Получение книги по id
        getBookById(state, book) {
            return { ...state, book: book.payload };
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
        deleteBook(state, bookId) {
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

export const actionTypes = creatingActionTypes(booksSlice.actions);
export const {fetchBooks, fetchFilteredBooks, getBookById, updateBooks,
    updateFilter, changeFormState, addBook, setErrorState, deleteBook,
        editBook, fetchBookById, changeLoadingState} = booksSlice.actions;
export default booksSlice.reducer;