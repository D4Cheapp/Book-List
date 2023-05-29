import React from 'react';
import {ErrorMessage} from "./components";
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

function App() {
    const isError = useSelector(state => state.error);

    return (
        <>
            { isError !== '' && <ErrorMessage/> }
            <Outlet/>
        </>
    );
}

export default App;