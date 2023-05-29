import React from "react";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {BookForm, BookList, ErrorPage} from "./pages";
import App from "./App";

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
                element: <BookForm/>,
                children: [
                    {
                        path: ':bookId/:type?',
                        element: null
                    }
                ]
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