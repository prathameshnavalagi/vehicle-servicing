import { combineReducers } from "redux";
import { loginReducer } from "./website/containers/Login/reducer"; 
import { reportReducer } from './admin/containers/Reports/reducer';
import { addUserReducer } from './admin/containers/AddUsers/reducer';
import { customerEnquiryReducer } from './admin/containers/CustomerEnquiry/reducer';
import{ dashBoardReducer } from './admin/containers/Dashboard/reducer';

const appReducer = combineReducers({
    login: loginReducer,
    reportReducer: reportReducer,
    addUserReducer: addUserReducer,
    customerEnquiryReducer: customerEnquiryReducer,
    dashBoardReducer: dashBoardReducer
});

export default appReducer;