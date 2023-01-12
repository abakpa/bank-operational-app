import * as actionTypes from "../constants/adminConstant";

export const adminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case actionTypes.POST_ADMIN_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.POST_ADMIN_SUCCESS:
            return {
                loading: false,
                admin: action.payload,
            };
        case actionTypes.POST_ADMIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};