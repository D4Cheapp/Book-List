import {takeEvery, call} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";
import {ADD_TYPE} from "../actions";

function* addBookWorker(action){
    yield call(asyncAddBook, action.bookInfo);
}

function* addBookWatcher(){
    yield takeEvery(ADD_TYPE, addBookWorker);
}

export {addBookWatcher}