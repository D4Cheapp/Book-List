import {all, takeEvery, call, put} from 'redux-saga/effects';
import {actionTypes, changeFormState, changeLoadingState,
    fetchBooks, getBookById, setErrorState} from "../reducer/booksReducer";
import {asyncAddBook, asyncDeleteBook, asyncEditBook, asyncGetBookById, asyncGetBooks} from "../../api";

//Запрос на добавление книги
function* addBookWatcher(){
    yield takeEvery(actionTypes.addBook, function* (action){
        yield put(changeLoadingState(true));

        const data = yield call(asyncAddBook, action.payload);
        yield put(changeFormState(!(data instanceof Error)));

        if (data instanceof Error) {
            yield put(setErrorState(data.message));
        }

        yield put(changeLoadingState(false));
    });
}

//Запрос на все книги сервера
function* updateBooksWatcher(){
    yield takeEvery(actionTypes.updateBooks, function* (action){
        yield put(changeLoadingState(true));

        const data = yield call(asyncGetBooks, action.payload);
        if (data instanceof Error) {
            yield put(setErrorState(data.message));
        }
        else {
            yield put(fetchBooks({...data}));
        }

        yield put(changeLoadingState(false));
    });
}

//Запрос книги по id
function* getBookByIdWatcher() {
    yield takeEvery(actionTypes.fetchBookById, function* (action) {
        yield put(changeLoadingState(true));

        const data = yield call(asyncGetBookById, action.payload);
        if (data instanceof Error) {
            yield put(setErrorState(data.message));
        } else {
            yield put(getBookById(data));
        }

        yield put(changeLoadingState(false));
    });
}

//Запрос на удаление книги
function* deleteBookWatcher(){
    yield takeEvery(actionTypes.deleteBook, function* (action){
        yield put(changeLoadingState(true));

        const data = yield call(asyncDeleteBook, action.payload);
        yield put(changeFormState(!(data instanceof Error)));

        if (data instanceof Error) {
            yield put(setErrorState(data.message));
        }

        yield put(changeLoadingState(false));
    });
}

//Запрос на изменение книги
function* editBookWatcher(){
    yield takeEvery(actionTypes.editBook, function* (action){
        yield put(changeLoadingState(true));

        const data = yield call(asyncEditBook, action.payload);
        yield put(changeFormState(!(data instanceof Error)));

        if (data instanceof Error) {
            yield put(setErrorState(data.message));
        }

        yield put(changeLoadingState(false));
    });
}

//Создание корневой саги со всеми вотчерами
function* booksSaga(){
    yield all([updateBooksWatcher(), addBookWatcher(),
            deleteBookWatcher(), editBookWatcher(), getBookByIdWatcher()]);
}

export {booksSaga}