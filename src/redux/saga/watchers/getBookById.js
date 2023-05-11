import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncGetBookById} from "../../../api";
import {bookIdRequest} from "../../reducer/jsonServerReducer";
import {GET_BOOK_BY_ID_TYPE} from "../actions";

function* getBookByIdWatcherWorker(action){
    const data = yield call(asyncGetBookById, action.bookId);
    const json = yield call(() => new Promise(res => res(data?.json())));
    yield put(bookIdRequest([json]));
}

function* getBookByIdWatcher(){
    yield takeEvery(GET_BOOK_BY_ID_TYPE, getBookByIdWatcherWorker);
}

export {getBookByIdWatcher}