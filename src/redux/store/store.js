import {configureStore} from "@reduxjs/toolkit";
import jsonServerReducer from "../reducer/jsonServerReducer";

const store = configureStore({reducer: jsonServerReducer});

export default store;