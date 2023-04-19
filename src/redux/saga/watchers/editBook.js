import {takeEvery, call} from 'redux-saga/effects';
import {asyncEditBook} from "../../../api";

function* editBookWorker(action){
    yield call(asyncEditBook, action.bookInfo);
}

function* editBookWatcher(){
    yield takeEvery('EDIT', editBookWorker);
}

export {editBookWatcher}