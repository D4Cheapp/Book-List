import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncEditBook} from "../../../api";
import {asyncUpdateBooks} from "../../actions";

function* editBookWorker(action){
    yield call(asyncEditBook, action.bookInfo);
    yield put(asyncUpdateBooks());
}

function* editBookWatcher(){
    yield takeEvery('EDIT', editBookWorker);
}

export {editBookWatcher}