import * as constants from './constants';
import axios from 'axios';

export function addUsers(addUserReqData) {
    return function(dispatch) {
        console.log(addUserReqData);
        if (addUserReqData.category == "Customer") {
            axios.post('http://localhost:3600/Admin/addUsers/customer', addUserReqData)
                .then(response => {
                    if (response.data.id != null){
                        dispatch({ type: constants.ADD_USER_DATA_SUCCESS, payload: response.data });
                        alert("user added successfully");
                    }else{
                        alert("No user added");
                    }
                })
                .catch(err => {
                    dispatch({ type: constants.ERROR_IN_ADD_USER_DATA, error: err });
                })
        } else if (addUserReqData.category == "Employee") {
            axios.post('http://localhost:3600/Admin/addUsers/employee', addUserReqData)
                .then(response => {
                    if (response.data.id != null){
                        dispatch({ type: constants.ADD_USER_DATA_SUCCESS, payload: response.data });
                        alert("user added successfully");
                    }else{
                        alert("No user added");
                    }
                })
                .catch(err => {
                    dispatch({ type: constants.ERROR_IN_ADD_USER_DATA, error: err });
                })
        } else {
            alert("Please Select Category");
        }
    }
}