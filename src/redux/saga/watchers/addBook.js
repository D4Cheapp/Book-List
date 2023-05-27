import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";
import {actionTypes, changeLoadingState} from "../../reducer/jsonServerReducer";

//Запрос на добавление книги и переадресация на начальную страницу
function* addBookWorker(action){
    yield put(changeLoadingState(true));
    yield call(asyncAddBook, action.payload);
    yield put(changeLoadingState(false));

}

function* addBookWatcher(){
    yield takeEvery(actionTypes.addBook, addBookWorker);
}

export {addBookWatcher}