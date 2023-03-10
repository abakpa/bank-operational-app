import * as actionTypes from "../constants/loginConstant";

export const loginReducer = (
    state = {
        login: "",
    },
    action
) => {
    switch (action.type) {
        case actionTypes.LOGIN_STAFF_REQUEST:
        case actionTypes.SIGNUP_STAFF_REQUEST:
        case actionTypes.LOGOUT_STAFF_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.LOGIN_STAFF_SUCCESS:
        case actionTypes.SIGNUP_STAFF_SUCCESS:
            return {
                loading: false,
                login: action.payload,
            };
        case actionTypes.LOGOUT_STAFF_SUCCESS:
            return {
                login: "",
            };
        case actionTypes.LOGIN_STAFF_FAIL:
        case actionTypes.SIGNUP_STAFF_FAIL:
        case actionTypes.LOGOUT_STAFF_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};