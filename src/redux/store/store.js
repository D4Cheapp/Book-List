import {configureStore} from "@reduxjs/toolkit";
import {jsonServerReducer} from "../reducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "../saga";

const sagaMiddleware = createSagaMiddleware();

//Создание хранилища
const store = configureStore({
    reducer: jsonServerReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

//Запуск саги
sagaMiddleware.run(rootSaga);

export default store;