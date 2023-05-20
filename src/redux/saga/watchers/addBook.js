import {takeEvery, call} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";
import {actionTypes} from "../../reducer/jsonServerReducer";

//Запрос на добавление книги и переадресация на начальную страницу
function* addBookWorker(action){
    yield call(asyncAddBook, action.payload);
    yield call(() => window.location.href = '/')
}

function* addBookWatcher(){
    yield takeEvery(actionTypes.addBook, addBookWorker);
}

export {addBookWatcher}