import {takeEvery, put, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {actionTypes, allBooksRequest, changeLoadingState, setErrorState} from "../../reducer/jsonServerReducer";

//Запрос на все книги сервера
function* updateBooksWorker(){
    yield put(changeLoadingState(true));

    const data = yield call(asyncGetBooks);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    }
    else {
        yield put(allBooksRequest(data));
    }

    yield put(changeLoadingState(false));
}

function* updateBooksWatcher(){
    yield takeEvery(actionTypes.updateBooks, updateBooksWorker);
}

export {updateBooksWatcher}