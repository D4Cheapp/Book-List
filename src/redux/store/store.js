import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import jsonServerReducer from "../reducer/jsonServerReducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    jsonServerReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;