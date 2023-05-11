import {takeEvery, call} from 'redux-saga/effects';
import {asyncEditBook} from "../../../api";
import {EDIT_TYPE} from "../actions";

function* editBookWorker(action){
    yield call(asyncEditBook, action.bookInfo);
}

function* editBookWatcher(){
    yield takeEvery(EDIT_TYPE, editBookWorker);
}

export {editBookWatcher}