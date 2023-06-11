import React from "react";
import ReactDOM from 'react-dom/client';
import {createHashRouter} from "react-router-dom";
import {BookList, ErrorPage, AddBookPage, BookPage, EditBookPage} from "./pages";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
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
]);

root.render(<App router={router}/>);