import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncDeleteBook} from "../../../api";
import {updateBooks} from "../../actions";

function* deleteBookWorker(action){
    yield call(asyncDeleteBook, action.id);
    yield put(updateBooks());
}

function* deleteBookWatcher(){
    yield takeEvery('DELETE', deleteBookWorker);
}

export {deleteBookWatcher}