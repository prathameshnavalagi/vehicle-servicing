import * as constants from './constants';

const addUserReducer = (state = {}, action) => {
    switch(action.type) {

        case constants.ADD_USER_DATA_SUCCESS:
            return Object.assign({}, state, {
                addUserData: action.payload
            });

        case constants.ERROR_IN_ADD_USER_DATA:
            return Object.assign({}, state, {
                addUserData: action.payload
            });

         default:
             return state;

    }
}

export { addUserReducer };