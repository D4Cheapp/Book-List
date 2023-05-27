import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {actionTypes, allBooksRequest, changeLoadingState} from "../../reducer/jsonServerReducer";

//Запрос на все книги сервера
function* updateBooksWorker(){
    yield put(changeLoadingState(true));

    const data = yield call(asyncGetBooks);
    yield put(allBooksRequest(data));

    yield put(changeLoadingState(false));
}

function* updateBooksWatcher(){
    yield takeEvery(actionTypes.updateBooks, updateBooksWorker);
}

export {updateBooksWatcher}