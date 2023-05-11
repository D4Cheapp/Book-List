import {takeEvery, call} from 'redux-saga/effects';
import {asyncDeleteBook} from "../../../api";
import {deleteBookAction} from "../actions";

function* deleteBookWorker(action){
    yield call(asyncDeleteBook, action.id);
}

function* deleteBookWatcher(){
    yield takeEvery(deleteBookAction().type, deleteBookWorker);
}

export {deleteBookWatcher}