import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import appReducer from "./reducer";
const loggerMiddleware = createLogger();
let initilState = {};
const store = createStore(
    appReducer,
    initilState,
    applyMiddleware(thunk, loggerMiddleware)
);
export default store;