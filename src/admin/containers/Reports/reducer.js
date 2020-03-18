import * as constants from './constants';

const initialState = {
    userData:[],
    errorData:{}
}

const reportReducer = (state = initialState, action)=>{
    switch(action.type){
        case constants.SAVE_USER_DATA:
            return {
                ...state,
                userData:action.data
            }

        case constants.ERROR_IN_USER_DATA:
            return {
                ...state,
                errorData:action.data
            }
        default:
            return state
    }
}

export { reportReducer }