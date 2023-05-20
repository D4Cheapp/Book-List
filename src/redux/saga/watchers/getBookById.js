import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncGetBookById} from "../../../api";
import {actionTypes, bookByIdRequest} from "../../reducer/jsonServerReducer";

//Запрос книги по id
function* getBookByIdWorker(action){
    const data = yield call(asyncGetBookById, action.payload);
    yield put(bookByIdRequest(data));
}

function* getBookByIdWatcher(){
    yield takeEvery(actionTypes.getBookById, getBookByIdWorker);
}

export {getBookByIdWatcher}