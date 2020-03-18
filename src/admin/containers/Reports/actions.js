import * as constants from './constants';

export const saveUserData = userData =>({
    type:constants.SAVE_USER_DATA,
    data:userData
})

export const errorInUserData = error =>({
    type:constants.ERROR_IN_USER_DATA,
    data:error
})