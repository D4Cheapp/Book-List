import {takeEvery, call} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";
import {addBook} from "../actions";

function* addBookWorker(action){
    yield call(asyncAddBook, action.bookInfo);
}

function* addBookWatcher(){
    yield takeEvery(addBook().type, addBookWorker);
}

export {addBookWatcher}