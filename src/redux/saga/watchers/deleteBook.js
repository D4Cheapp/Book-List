import {takeEvery, call} from 'redux-saga/effects';
import {asyncDeleteBook} from "../../../api";

function* deleteBookWorker(action){
    yield call(asyncDeleteBook, action.id);
}

function* deleteBookWatcher(){
    yield takeEvery('DELETE', deleteBookWorker);
}

export {deleteBookWatcher}