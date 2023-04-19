import {put, takeEvery, call} from 'redux-saga/effects';
import {asyncFilterBook} from "../../../api";
import {bookFilter} from "../../actions";

function* filterWorker(event){
    const data = yield call(asyncFilterBook, event.filter);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(bookFilter(json));
}

function* filterWatcher(){
    yield takeEvery('FILTER_UPDATE', filterWorker);
}


export {filterWatcher}
