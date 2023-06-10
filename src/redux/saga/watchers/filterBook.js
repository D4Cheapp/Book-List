import {put, takeEvery, call} from 'redux-saga/effects';
import {asyncGetBooks} from "../../../api";
import {actionTypes, fetchFilteredBooks, changeLoadingState, setErrorState} from "../../reducer/jsonServerReducer";

//Запрос книг по фильтру и преобразование их в массив
function* filterWorker(event){
    yield put(changeLoadingState(true));

    const data = yield call(asyncGetBooks, event.payload);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    }
    else {
        yield put(fetchFilteredBooks(data));
    }

    yield put(changeLoadingState(false));
}

function* filterWatcher(){
    yield takeEvery(actionTypes.updateFilter, filterWorker);
}


export {filterWatcher}
