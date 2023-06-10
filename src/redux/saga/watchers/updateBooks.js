import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {actionTypes, fetchBooks, changeLoadingState, setErrorState} from "../../reducer/jsonServerReducer";

//Запрос на все книги сервера
function* updateBooksWorker(action){
    yield put(changeLoadingState(true));

    const data = yield call(asyncGetBooks, undefined, action.payload.page);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    }
    else {
        yield put(fetchBooks({...data, replace: action.payload.replace}));
    }

    yield put(changeLoadingState(false));
}

function* updateBooksWatcher(){
    yield takeEvery(actionTypes.updateBooks, updateBooksWorker);
}

export {updateBooksWatcher}