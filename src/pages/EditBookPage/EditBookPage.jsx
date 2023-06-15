import React, {useEffect} from 'react';
import {BookForm} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {editBook, fetchBookById} from "../../redux/reducer/booksReducer";

function EditBookPage() {
    const model = useSelector(state => state.book);
    const bookId = useParams().bookId;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBookById(bookId));
    },[]);

    function onSubmit(title, description, author, dateFrom, dateTo) {
        const newBookInfo = {
            title, author, description,
            dateFrom, dateTo, id: model.id,
        };

        dispatch(editBook(newBookInfo));
    }

    return (
        <BookForm model={model} onSubmit={onSubmit} submitButtonTitle={'Сохранить'} withDeleteButton/>
    );
}

export default EditBookPage;