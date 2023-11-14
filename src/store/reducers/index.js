import { combineReducers } from "redux";

import config from "./ConfigReducer";
import wallet from "./WalletReducer";
import user from "./UserReducer";

/**
 * Combine reducers and export it
 */
export default combineReducers({
    config,
    wallet,
    user,
});
