import * as constants from './constants';

const customerEnquiryReducer = (state = {}, action) => {
    switch(action.type){
        case constants.CUSTOMER_ENQUIRY_SUCCESS:
            return Object.assign({}, state, {
                customerEnquiries: action.payload
            });

        case constants.CUSTOMER_ENQUIRY_FAILURE:
            return Object.assign({}, state, {
                customerEnquiries: action.payload
            });
        
        default:
            return state;
            
    }
}

export { customerEnquiryReducer };