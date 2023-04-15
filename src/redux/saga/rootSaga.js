import {all} from 'redux-saga/effects';
import {addBookWatcher, deleteBookWatcher, editBookWatcher, updateBooksWatcher} from "./watchers";

function* rootSaga(){
    yield all([updateBooksWatcher(), addBookWatcher(), deleteBookWatcher(), editBookWatcher()]);
}

export {rootSaga}