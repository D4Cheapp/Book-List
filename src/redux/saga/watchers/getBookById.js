import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncGetBookById} from "../../../api";
import {bookIdRequest} from "../../reducer/jsonServerReducer";
import {getBookById} from "../actions";

function* getBookByIdWatcherWorker(action){
    const data = yield call(asyncGetBookById, action.bookId);
    const json = yield call(() => new Promise(res => res(data?.json())));
    yield put(bookIdRequest([json]));
}

function* getBookByIdWatcher(){
    yield takeEvery(getBookById().type, getBookByIdWatcherWorker);
}

export {getBookByIdWatcher}