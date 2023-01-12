import * as actionTypes from "../constants/tellerConstant";

export const tellerReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case actionTypes.POST_TELLER_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.POST_TELLER_SUCCESS:
            return {
                loading: false,
                teller: action.payload,
            };
        case actionTypes.POST_TELLER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};