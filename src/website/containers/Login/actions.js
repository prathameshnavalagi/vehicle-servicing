import * as constants from "./constants";

export const increaseCounter = countVal => ({
    type: constants.INCREASE_COUNTER,
    data: countVal
});

export const reduceCounter = countVal => ({
    type: constants.REDUCE_COUNTER,
    data: countVal
});