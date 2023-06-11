import React from 'react';
import {ErrorMessage} from "./components";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {store} from "./redux/store";

function App({router}) {
    return (
        <>
            <Provider store={store}>
                <ErrorMessage/>
                <RouterProvider router={router}/>
            </Provider>
        </>
    );
}

export default App;