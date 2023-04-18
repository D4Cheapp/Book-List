import {all} from 'redux-saga/effects';
import {addBookWatcher, deleteBookWatcher, editBookWatcher, filterWatcher, updateBooksWatcher} from "./watchers";

function* rootSaga(){
    yield all([updateBooksWatcher(), addBookWatcher(), deleteBookWatcher(), editBookWatcher(), filterWatcher()]);
}

export {rootSaga}