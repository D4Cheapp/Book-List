import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncEditBook} from "../../../api";
import {updateBooks} from "../../actions";

function* editBookWorker(action){
    yield call(asyncEditBook, action.bookInfo);
    yield put(updateBooks());
}

function* editBookWatcher(){
    yield takeEvery('EDIT', editBookWorker);
}

export {editBookWatcher}