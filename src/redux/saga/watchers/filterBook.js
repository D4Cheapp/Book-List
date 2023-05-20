import {put, takeEvery, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {actionTypes, bookFilterRequest} from "../../reducer/jsonServerReducer";

//Запрос книг по фильтру и преобразование их в массив
function* filterWorker(event){
    const data = yield call(asyncGetBooks, event.payload);
    yield put(bookFilterRequest(data));
}

function* filterWatcher(){
    yield takeEvery(actionTypes.filterUpdate, filterWorker);
}


export {filterWatcher}
