import React from "react";
import ReactDOM from "react-dom";

// ### REDUX STORE
import {Provider} from "react-redux";
import store from './store';

// ### APP
import App from "./App";

/**
 * Render DOM
 */
ReactDOM.render(
    <>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </>,
    document.getElementById('root')
);
