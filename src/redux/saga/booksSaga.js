import {all, takeEvery, call, put} from 'redux-saga/effects';
import {push} from "redux-first-history";
import {actionTypes, changeLoadingState,
    fetchBooksSuccess, fetchBookByIdSuccess, setErrorState} from "../reducer/booksReducer";
import {asyncAddBook, asyncDeleteBook, asyncEditBook, asyncGetBookById, asyncGetBooks} from "../../api";

//Запрос на добавление книги
function* addBookSaga(action){
    yield put(changeLoadingState(true));

    const data = yield call(asyncAddBook, action.payload);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    }
    else {
        yield put(push('/'));
    }

    yield put(changeLoadingState(false));
}

//Запрос на все книги сервера
function* updateBooksSaga(action){
    yield put(changeLoadingState(true));

    const data = yield call(asyncGetBooks, action.payload);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    }
    else {
        yield put(fetchBooksSuccess({...data}));
    }

    yield put(changeLoadingState(false));
}

//Запрос книги по id
function* getBookByIdSaga(action) {
    yield put(changeLoadingState(true));

    const data = yield call(asyncGetBookById, action.payload);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    } else {
        yield put(fetchBookByIdSuccess(data));
    }

    yield put(changeLoadingState(false));
}

//Запрос на удаление книги
function* deleteBookSaga(action){
    yield put(changeLoadingState(true));

    const data = yield call(asyncDeleteBook, action.payload);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    }
    else {
        yield put(push('/'));
    }


    yield put(changeLoadingState(false));
}

//Запрос на изменение книги
function* editBookSaga(action){
    yield put(changeLoadingState(true));

    const data = yield call(asyncEditBook, action.payload);
    if (data instanceof Error) {
        yield put(setErrorState(data.message));
    }
    else {
        yield put(push('/'));
    }

    yield put(changeLoadingState(false));
}

//Создание корневой саги со всеми вотчерами
function* booksSaga(){
    yield all([takeEvery(actionTypes.fetchBooks, updateBooksSaga), takeEvery(actionTypes.addBook, addBookSaga),
        takeEvery(actionTypes.deleteBook, deleteBookSaga), takeEvery(actionTypes.editBook, editBookSaga),
            takeEvery(actionTypes.fetchBookById, getBookByIdSaga)]);
}

export {booksSaga}