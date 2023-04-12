import React from "react";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./redux/store/store";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {BookForm} from "./pages/BookForm";
import {ListView} from "./pages/ListView";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
    {
        path: '/',
        element: <ListView/>
    },
    {
        path: '/book/add',
        element: <BookForm/>
    },
    {
        path: '/book/:bookId/:type?',
        element: <BookForm/>
    }
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);