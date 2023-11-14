import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
//import logger from 'redux-logger'
import rootReducer from "./reducers";

/**
 * Creating Store
 */
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
        // applyMiddleware(logger)
    )
);

export default store;