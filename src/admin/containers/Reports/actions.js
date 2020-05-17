import * as constants from './constants';
import axios from 'axios';

// export const saveUserData = userData =>({
//     type:constants.SAVE_USER_DATA,
//     data:userData
// })

// export const errorInUserData = error =>({
//     type:constants.ERROR_IN_USER_DATA,
//     data:error
// })

export function getReport() {
    return function (dispatch) {
        return axios.get("http://localhost:3002/mock/getReport")
        .then((res) => {
            //alert("res.."+JSON.stringify(res));
            console.log(res.data);
            if(res.data.length > 0){
                dispatch({ type: constants.GET_REPORT_DATA, payload: res.data });
            }else{
                alert("No report data");
            }
        }).catch(error => {
            dispatch({ type: constants.GET_REPORT_DATA_ERROR, error: error });
        });
    };
}