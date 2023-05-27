import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncDeleteBook} from "../../../api";
import {actionTypes, changeLoadingState} from "../../reducer/jsonServerReducer";

//Запрос на удаление книги и переадресация на начальную страницу
function* deleteBookWorker(action){
    yield put(changeLoadingState(true));
    yield call(asyncDeleteBook, action.payload);
    yield put(changeLoadingState(false));
}

function* deleteBookWatcher(){
    yield takeEvery(actionTypes.deleteBookAction, deleteBookWorker);
}

export {deleteBookWatcher}