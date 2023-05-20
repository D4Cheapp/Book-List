import {takeEvery, call} from 'redux-saga/effects';
import {asyncDeleteBook} from "../../../api";
import {actionTypes} from "../../reducer/jsonServerReducer";

//Запрос на удаление книги и переадресация на начальную страницу
function* deleteBookWorker(action){
    yield call(asyncDeleteBook, action.payload);
    yield call(() => window.location.href = '/')
}

function* deleteBookWatcher(){
    yield takeEvery(actionTypes.deleteBookAction, deleteBookWorker);
}

export {deleteBookWatcher}