import {configureStore} from "@reduxjs/toolkit";
import {booksReducer} from "../reducer";
import createSagaMiddleware from 'redux-saga'
import {booksSaga} from "../saga";

const sagaMiddleware = createSagaMiddleware();

//Создание хранилища
const store = configureStore({
    reducer: booksReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

//Запуск саги
sagaMiddleware.run(booksSaga);

export default store;