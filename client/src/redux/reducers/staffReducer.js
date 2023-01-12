import * as actionTypes from "../constants/staffConstant";

export const staffReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case actionTypes.POST_STAFF_REQUEST:
        case actionTypes.GET_STAFF_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.POST_STAFF_SUCCESS:
        case actionTypes.GET_STAFF_SUCCESS:
            return {
                loading: false,
                staff: action.payload,
            };
        case actionTypes.POST_STAFF_FAIL:
        case actionTypes.GET_STAFF_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};