import {takeEvery, call} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";
import {ADD_TYPE} from "../../actions";

//Запрос на добавление книги и переадресация на начальную страницу
function* addBookWorker(action){
    yield call(asyncAddBook, action.bookInfo);
    yield call(() => window.location.href = '/')
}

function* addBookWatcher(){
    yield takeEvery(ADD_TYPE, addBookWorker);
}

export {addBookWatcher}