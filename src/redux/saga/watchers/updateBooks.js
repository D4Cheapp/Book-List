import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {serverRequest} from "../../actions";

function* updateBooksWorker(){
    const data = yield call(asyncGetBooks);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(serverRequest(json));
}

function* updateBooksWatcher(){
    yield takeEvery('UPDATE_BOOKS', updateBooksWorker);
}

export {updateBooksWatcher}