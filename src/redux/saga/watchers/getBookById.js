import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncGetBookById} from "../../../api";
import {actionTypes, getBookById, changeLoadingState, setErrorState} from "../../reducer/jsonServerReducer";

//Запрос книги по id
function* getBookByIdWorker(action){
    yield put(changeLoadingState(true));

    const data = yield call(asyncGetBookById, action.payload);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    }
    else {
        yield put(getBookById(data));
    }

    yield put(changeLoadingState(false));
}

function* getBookByIdWatcher(){
    yield takeEvery(actionTypes.fetchBookById, getBookByIdWorker);
}

export {getBookByIdWatcher}