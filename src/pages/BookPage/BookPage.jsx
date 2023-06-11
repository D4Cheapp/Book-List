import React, {useEffect} from 'react';
import {BookForm} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchBookById} from "../../redux/reducer/booksReducer";
import {useParams} from "react-router-dom";

function BookPage() {
    const model = useSelector(state => state.book);
    const bookId = useParams().bookId;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBookById(bookId));
    },[]);

    return (
        <BookForm model={model}/>
    );
}

export default BookPage;