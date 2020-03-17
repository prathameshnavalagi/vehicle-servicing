import * as constants from "./constants";
const initialState = {
    testCount: 10
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.INCREASE_COUNTER: return {
            ...state,
            testCount: action.data
        };
        case constants.REDUCE_COUNTER: return {
            ...state,
            testCount: action.data
        };
        default: return state;
    }
};

export { loginReducer };