import { combineReducers } from "redux";
import { loginReducer } from "./website/containers/Login/reducer"; 
import { reportReducer } from './admin/containers/Reports/reducer';

const appReducer = combineReducers({
    login: loginReducer,
    report: reportReducer
});

export default appReducer;