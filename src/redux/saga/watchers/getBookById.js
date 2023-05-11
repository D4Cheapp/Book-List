import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncGetBookById} from "../../../api";
import {bookByIdRequest} from "../../reducer/jsonServerReducer";
import {GET_BOOK_BY_ID_TYPE} from "../../actions";

//Запрос книги по id
function* getBookByIdWorker(action){
    const data = yield call(asyncGetBookById, action.bookId);
    const json = yield call(() => new Promise(res => res(data?.json())));
    yield put(bookByIdRequest(json));
}

function* getBookByIdWatcher(){
    yield takeEvery(GET_BOOK_BY_ID_TYPE, getBookByIdWorker);
}

export {getBookByIdWatcher}