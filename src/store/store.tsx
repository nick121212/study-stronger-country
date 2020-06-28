import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from "redux";
import { createLogger } from "redux-logger";

import { reducer as dashboardReducer } from "./reducers/dashboard";
import { reducer } from "./reducers/login";

const store: Store<any, AnyAction> = createStore(
    combineReducers({
        dashboardInfo: dashboardReducer,
        loginInfo: reducer
    }),
    applyMiddleware(createLogger({}))
);

export default store;
