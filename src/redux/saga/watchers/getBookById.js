import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncGetBookById} from "../../../api";
import {actionTypes, bookByIdRequest, changeLoadingState} from "../../reducer/jsonServerReducer";

//Запрос книги по id
function* getBookByIdWorker(action){
    yield put(changeLoadingState(true));

    const data = yield call(asyncGetBookById, action.payload);
    yield put(bookByIdRequest(data));

    yield put(changeLoadingState(false));
}

function* getBookByIdWatcher(){
    yield takeEvery(actionTypes.getBookById, getBookByIdWorker);
}

export {getBookByIdWatcher}