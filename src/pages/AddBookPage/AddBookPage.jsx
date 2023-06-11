import React from 'react';
import {BookForm} from "../../components";
import {addBook} from "../../redux/reducer/booksReducer";
import {useDispatch} from "react-redux";

function AddBookPage() {
    const dispatch = useDispatch();
    function onSubmit(title, description, author, dateFrom, dateTo) {
        const newBookInfo = {
            title, author, description,
            dateFrom, dateTo, id: Date.now(),
        };

        dispatch(addBook(newBookInfo));
    }

    return (
        <BookForm model={{}} onSubmit={onSubmit} submitButtonTitle={'Добавить'}/>
    );
}

export default AddBookPage;