import {configureStore} from "@reduxjs/toolkit";
import {jsonServerReducer} from "../reducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: jsonServerReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;