import {put, takeEvery, call} from 'redux-saga/effects';
import {asyncFilterBook} from "../../../api";
import {bookFilter} from "../../reducer/jsonServerReducer";
import {FILTER_UPDATE_TYPE} from "../actions";

function* filterWorker(event){
    const data = yield call(asyncFilterBook, event.filter);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(bookFilter(json));
}

function* filterWatcher(){
    yield takeEvery(FILTER_UPDATE_TYPE, filterWorker);
}


export {filterWatcher}
