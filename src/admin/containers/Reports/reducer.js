import * as constants from './constants';

// const initialState = {
//     userData: [],
//     errorData: {},
//     report: []
// }

const reportReducer = (state = {}, action)=>{
    //alert("in reportReducer");
    switch(action.type){
        // case constants.SAVE_USER_DATA:
        //     return {
        //         ...state,
        //         userData:action.data
        //     }

        // case constants.ERROR_IN_USER_DATA:
        //     return {
        //         ...state,
        //         errorData:action.data
        //     }
        
        case constants.GET_REPORT_DATA:
            //alert("reportReducer.."+action.payload);
            return Object.assign({}, state, {
                reportData: action.payload
            })
        
        case constants.GET_REPORT_DATA_ERROR:
            return Object.assign({}, state, {
                reportData: action.payload
            })

        default:
            return state
    }
}

export { reportReducer }