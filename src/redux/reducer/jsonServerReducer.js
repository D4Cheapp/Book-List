import {createSlice} from "@reduxjs/toolkit";

const jsonBookServerSlice = createSlice({
   name: 'jsonBookServer',
   initialState: undefined,
   reducers: {
        serverRequest(state, books) {
            return books.payload;
        },

        bookFilter(state, filteredBooks) {
            return filteredBooks.payload;
        },

        bookIdRequest(state, book) {
            return book.payload
        }
   }
});

export const {serverRequest, bookFilter, bookIdRequest} = jsonBookServerSlice.actions;
export default jsonBookServerSlice.reducer;