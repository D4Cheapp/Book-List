import {takeEvery, call, put} from 'redux-saga/effects';
import {asyncDeleteBook} from "../../../api";
import {actionTypes, changeFormState, changeLoadingState, setErrorState} from "../../reducer/jsonServerReducer";

//Запрос на удаление книги
function* deleteBookWorker(action){
    yield put(changeLoadingState(true));

    const respond = yield call(asyncDeleteBook, action.payload);
    yield put(changeFormState(!(respond instanceof Error)));

    if (respond instanceof Error) {
        yield put(setErrorState(respond.message));
    }

    yield put(changeLoadingState(false));
}

function* deleteBookWatcher(){
    yield takeEvery(actionTypes.deleteBook, deleteBookWorker);
}

export {deleteBookWatcher}