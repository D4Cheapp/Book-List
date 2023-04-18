import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";
import {updateBooks} from "../../actions";

function* addBookWorker(action){
    yield call(asyncAddBook, action.bookInfo);
    yield put(updateBooks());
}

function* addBookWatcher(){
    yield takeEvery('ADD', addBookWorker);
}

export {addBookWatcher}