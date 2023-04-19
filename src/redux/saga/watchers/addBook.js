import {takeEvery, call} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";

function* addBookWorker(action){
    yield call(asyncAddBook, action.bookInfo);
}

function* addBookWatcher(){
    yield takeEvery('ADD', addBookWorker);
}

export {addBookWatcher}