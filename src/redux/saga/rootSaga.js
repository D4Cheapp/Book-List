import {all} from 'redux-saga/effects';
import {addBookWatcher, deleteBookWatcher,
    editBookWatcher, filterWatcher,
    getBookByIdWatcher, updateBooksWatcher
} from "./watchers";

//Создание корневой саги со всеми вотчерами
function* rootSaga(){
    yield all([updateBooksWatcher(), addBookWatcher(), deleteBookWatcher(),
        editBookWatcher(), filterWatcher(), getBookByIdWatcher()]);
}

export {rootSaga}