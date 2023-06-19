import React from 'react';
import {ErrorMessage} from "./components";
import {Provider} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {store, history} from "./redux/store";
import {HistoryRouter} from "redux-first-history/rr6";

function App({router}) {
    return (
        <Provider store={store}>
            <HistoryRouter history={history}>
                <ErrorMessage/>

                <Routes>
                    {router.map((page) => <Route key={page.path} path={page.path} element={page.element}/>)}
                </Routes>
            </HistoryRouter>
        </Provider>
    );
}

export default App;