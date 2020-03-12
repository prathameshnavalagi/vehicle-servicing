import { combineReducers } from "redux";
import { loginReducer } from "./containers/Login/reducer"; 

const appReducer = combineReducers({
    login: loginReducer
});

export default appReducer;