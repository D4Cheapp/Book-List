import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {allBooksRequest} from "../../reducer/jsonServerReducer";
import {UPDATE_BOOKS_TYPE} from "../../actions";

//Запрос на все книги сервера
function* updateBooksWorker(){
    const data = yield call(asyncGetBooks);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(allBooksRequest(json));
}

function* updateBooksWatcher(){
    yield takeEvery(UPDATE_BOOKS_TYPE, updateBooksWorker);
}

export {updateBooksWatcher}