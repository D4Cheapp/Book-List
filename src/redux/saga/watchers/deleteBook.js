import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncDeleteBook} from "../../../api";
import {asyncUpdateBooks} from "../../actions";

function* deleteBookWorker(action){
    yield call(asyncDeleteBook, action.id);
    yield put(asyncUpdateBooks());
}

function* deleteBookWatcher(){
    yield takeEvery('DELETE', deleteBookWorker);
}

export {deleteBookWatcher}