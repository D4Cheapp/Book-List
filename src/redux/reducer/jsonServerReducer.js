import {createSlice} from "@reduxjs/toolkit";

//Редьюсер запросов на сервер
const jsonBookServerSlice = createSlice({
   name: 'jsonBookServer',
   initialState: undefined,
   reducers: {
        //Запрос всех книг с сервера
        allBooksRequest(state, books) {
            return books.payload;
        },

        //Запрос книг по фильтру
        bookFilterRequest(state, filteredBooks) {
            return filteredBooks.payload;
        },

        //Запрос книги по id
        bookByIdRequest(state, book) {
            return book.payload
        }
   }
});

export const {allBooksRequest, bookFilterRequest, bookByIdRequest} = jsonBookServerSlice.actions;
export default jsonBookServerSlice.reducer;