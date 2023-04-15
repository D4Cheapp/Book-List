import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";
import {asyncUpdateBooks} from "../../actions";

function* addBookWorker(action){
    yield call(asyncAddBook, action.bookInfo);
    yield put(asyncUpdateBooks());
}

function* addBookWatcher(){
    yield takeEvery('ADD', addBookWorker);
}

export {addBookWatcher}