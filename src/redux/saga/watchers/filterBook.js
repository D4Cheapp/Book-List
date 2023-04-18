import {put, takeEvery, call} from 'redux-saga/effects';
import {asyncFilterBook} from "../../../api";
import {asyncBookFilter} from "../../actions";

function* filterWorker(event){
    const data = yield call(asyncFilterBook, event.filter);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(asyncBookFilter(json));
}

function* filterWatcher(){
    yield takeEvery('FILTER_UPDATE', filterWorker);
}


export {filterWatcher}
