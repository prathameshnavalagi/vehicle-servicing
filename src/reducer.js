import { combineReducers } from "redux";
import { loginReducer } from "./website/containers/Login/reducer"; 

const appReducer = combineReducers({
    login: loginReducer
});

export default appReducer;