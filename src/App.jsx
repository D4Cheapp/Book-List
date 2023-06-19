import React from 'react';
import {ErrorMessage} from "./components";
import {Provider} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {store, history} from "./redux/store";
import {AddBookPage, BookList, BookPage, EditBookPage, ErrorPage} from "./pages";
import {HistoryRouter} from "redux-first-history/rr6";

function App() {
    return (
        <Provider store={store}>
            <HistoryRouter history={history}>
                <ErrorMessage/>

                <Routes>
                    <Route path="/" element={<BookList/>} />
                    <Route path="/book/:bookId" element={<BookPage/>} />
                    <Route path="/book/:bookId/edit" element={<EditBookPage/>} />
                    <Route path="/book/add" element={<AddBookPage/>} />
                    <Route element={<ErrorPage/>} />
                </Routes>
            </HistoryRouter>
        </Provider>
    );
}

export default App;