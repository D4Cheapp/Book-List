import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncGetBookById} from "../../../api";
import {bookIdRequest} from "../../actions";

function* getBookByIdWatcherWorker(action){
    const data = yield call(asyncGetBookById, action.bookId);
    const json = yield call(() => new Promise(res => res(data?.json())));
    yield put(bookIdRequest([json]));
}

function* getBookByIdWatcher(){
    yield takeEvery('GET_BOOK', getBookByIdWatcherWorker);
}

export {getBookByIdWatcher}