import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncEditBook} from "../../../api";
import {actionTypes, changeFormState, changeLoadingState, setErrorState} from "../../reducer/jsonServerReducer";

//Запрос на изменение книги
function* editBookWorker(action){
    yield put(changeLoadingState(true));

    const respond = yield call(asyncEditBook, action.payload);
    yield put(changeFormState(!(respond instanceof Error)));

    if (respond instanceof Error) {
        yield put(setErrorState(respond.message));
    }

    yield put(changeLoadingState(false));
}

function* editBookWatcher(){
    yield takeEvery(actionTypes.editBook, editBookWorker);
}

export {editBookWatcher}