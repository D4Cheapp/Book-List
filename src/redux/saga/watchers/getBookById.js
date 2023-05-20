import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncGetBookById} from "../../../api";
import {bookByIdRequest} from "../../reducer/jsonServerReducer";
import {GET_BOOK_BY_ID_TYPE} from "../../actions";

//Запрос книги по id
function* getBookByIdWorker(action){
    const data = yield call(asyncGetBookById, action.bookId);
    yield put(bookByIdRequest(data?.length ? data : []));
}

function* getBookByIdWatcher(){
    yield takeEvery(GET_BOOK_BY_ID_TYPE, getBookByIdWorker);
}

export {getBookByIdWatcher}