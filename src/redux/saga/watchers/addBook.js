import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncAddBook} from "../../../api";
import {actionTypes, changeFormState, changeLoadingState, setErrorState} from "../../reducer/jsonServerReducer";

//Запрос на добавление книги
function* addBookWorker(action){
    yield put(changeLoadingState(true));

    const respond = yield call(asyncAddBook, action.payload);
    yield put(changeFormState(!(respond instanceof Error)));

    if (respond instanceof Error) {
        yield put(setErrorState(respond.message));
    }

    yield put(changeLoadingState(false));
}

function* addBookWatcher(){
    yield takeEvery(actionTypes.addBook, addBookWorker);
}

export {addBookWatcher}