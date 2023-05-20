import {takeEvery, call} from 'redux-saga/effects';
import {asyncEditBook} from "../../../api";
import {actionTypes} from "../../reducer/jsonServerReducer";

//Запрос на изменение книги и переадресация на начальную страницу
function* editBookWorker(action){
    yield call(asyncEditBook, action.payload);
    yield call(() => window.location.href = '/')
}

function* editBookWatcher(){
    yield takeEvery(actionTypes.editBook, editBookWorker);
}

export {editBookWatcher}