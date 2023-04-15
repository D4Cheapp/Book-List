import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncServerAdd} from "../actions";
import {getBooks} from "../../api";

function* workerSaga(){
    const data = yield call(getBooks);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(asyncServerAdd(json));
}

function* watcherSaga(){
    yield takeEvery('UPDATE_BOOKS', workerSaga);
}

function* rootSaga(){
    yield watcherSaga();
}

export {rootSaga}