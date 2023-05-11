import {takeEvery, call} from 'redux-saga/effects';
import {asyncEditBook} from "../../../api";
import {editBook} from "../actions";

function* editBookWorker(action){
    yield call(asyncEditBook, action.bookInfo);
}

function* editBookWatcher(){
    yield takeEvery(editBook().type, editBookWorker);
}

export {editBookWatcher}