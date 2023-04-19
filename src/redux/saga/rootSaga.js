import {all} from 'redux-saga/effects';
import {
    addBookWatcher,
    deleteBookWatcher,
    editBookWatcher,
    filterWatcher,
    getBookByIdWatcher,
    updateBooksWatcher
} from "./watchers";

function* rootSaga(){
    yield all([updateBooksWatcher(), addBookWatcher(), deleteBookWatcher(),
        editBookWatcher(), filterWatcher(), getBookByIdWatcher()]);
}

export {rootSaga}