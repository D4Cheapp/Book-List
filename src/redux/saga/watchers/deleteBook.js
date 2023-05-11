import {takeEvery, call} from 'redux-saga/effects';
import {asyncDeleteBook} from "../../../api";
import {DELETE_TYPE} from "../actions";

function* deleteBookWorker(action){
    yield call(asyncDeleteBook, action.id);
    yield call(() => window.location.href = '/')
}

function* deleteBookWatcher(){
    yield takeEvery(DELETE_TYPE, deleteBookWorker);
}

export {deleteBookWatcher}