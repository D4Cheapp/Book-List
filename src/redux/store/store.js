import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {booksReducer} from "../reducer";
import createSagaMiddleware from 'redux-saga'
import {booksSaga} from "../saga";
import {createReduxHistoryContext} from "redux-first-history";
import {createHashHistory} from 'history';

const sagaMiddleware = createSagaMiddleware();

const {createReduxHistory, routerMiddleware, routerReducer} = createReduxHistoryContext(
    {history: createHashHistory()}
);

//Создание хранилища
const store = configureStore({
    reducer: combineReducers({book: booksReducer, router: routerReducer}),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware)
});

//Запуск саги
sagaMiddleware.run(booksSaga);

export default store;
export const history = createReduxHistory(store);