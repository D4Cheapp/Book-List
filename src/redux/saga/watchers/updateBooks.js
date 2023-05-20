import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {allBooksRequest} from "../../reducer/jsonServerReducer";
import {UPDATE_BOOKS_TYPE} from "../../actions";

//Запрос на все книги сервера
function* updateBooksWorker(){
    const data = yield call(asyncGetBooks);
    yield put(allBooksRequest(data));
}

function* updateBooksWatcher(){
    yield takeEvery(UPDATE_BOOKS_TYPE, updateBooksWorker);
}

export {updateBooksWatcher}