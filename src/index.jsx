import React from "react";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {BookList, ErrorPage} from "./pages";
import App from "./App";
import {AddBookPage, BookPage, EditBookPage} from "./pages/Form";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
              path: '/',
              element: <BookList/>
            },
            {
                path: '/book',
                element: <BookPage/>,
                children: [
                    {
                        path: ':bookId',
                        element: null
                    }
                ]
            },
            {
                path: '/book/edit',
                element: <EditBookPage/>,
                children: [
                    {
                        path: ':bookId',
                        element: null
                    }
                ]
            },
            {
                path: '/book/add',
                element: <AddBookPage/>,
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);