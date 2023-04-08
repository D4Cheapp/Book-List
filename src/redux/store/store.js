import {configureStore} from "@reduxjs/toolkit";
import serverRequestsReducer from "../reducer/localStorageReducer";

const store = configureStore({reducer: serverRequestsReducer});

export default store;