import axios from 'axios';
import * as constants from './constants';

export function viewCustomerEnquiries() {
    return function (dispatch) {
        axios.get(`http://localhost:3600/Admin/serviceRequest/viewCustomerEnquiries`)
            .then(response => {
                if (response.data.length > 0) {
                    console.log(response.data);
                    dispatch(
                        { 
                            type: constants.CUSTOMER_ENQUIRY_SUCCESS,
                            payload: response.data
                        }
                    );
                }else{
                    alert("No customer enquiries");
                }
            })
            .catch(err => {
                dispatch(
                    {
                        type: constants.CUSTOMER_ENQUIRY_FAILURE,
                        payload: err
                    }
                )
            })
    }
}