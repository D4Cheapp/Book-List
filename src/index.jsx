import React from "react";
import ReactDOM from 'react-dom/client';
import {AddBookPage, BookList, BookPage, EditBookPage, ErrorPage} from "./pages";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = [
    {
        path: '/',
        element: <BookList/>
    },
    {
        path: '/book/:bookId',
        element: <BookPage/>,
    },
    {
        path: '/book/:bookId/edit',
        element: <EditBookPage/>,
    },
    {
        path: '/book/add',
        element: <AddBookPage/>,
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
];

root.render(<App router={router}/>);