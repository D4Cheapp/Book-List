import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncEditBook} from "../../../api";
import {actionTypes, changeLoadingState} from "../../reducer/jsonServerReducer";

//Запрос на изменение книги и переадресация на начальную страницу
function* editBookWorker(action){
    yield put(changeLoadingState(true));
    yield call(asyncEditBook, action.payload);
    yield put(changeLoadingState(false));
}

function* editBookWatcher(){
    yield takeEvery(actionTypes.editBook, editBookWorker);
}

export {editBookWatcher}