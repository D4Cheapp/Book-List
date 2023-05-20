import {put, takeEvery, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {bookFilterRequest} from "../../reducer/jsonServerReducer";
import {FILTER_UPDATE_TYPE} from "../../actions";

//Запрос книг по фильтру и преобразование их в массив
function* filterWorker(event){
    const data = yield call(asyncGetBooks, event.filter);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(bookFilterRequest(json));
}

function* filterWatcher(){
    yield takeEvery(FILTER_UPDATE_TYPE, filterWorker);
}


export {filterWatcher}
