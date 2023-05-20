import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {actionTypes, allBooksRequest} from "../../reducer/jsonServerReducer";

//Запрос на все книги сервера
function* updateBooksWorker(){
    const data = yield call(asyncGetBooks);
    yield put(allBooksRequest(data));
}

function* updateBooksWatcher(){
    yield takeEvery(actionTypes.updateBooks, updateBooksWorker);
}

export {updateBooksWatcher}