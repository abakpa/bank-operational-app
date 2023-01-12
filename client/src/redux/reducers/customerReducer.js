import * as actionTypes from "../constants/customerConstant";

export const customerReducer = (state = { customer: {} }, action) => {
    switch (action.type) {
        case actionTypes.POST_CUSTOMER_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.POST_CUSTOMER_SUCCESS:
            return {
                loading: false,
                customer: action.payload,
            };
        case actionTypes.POST_CUSTOMER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};