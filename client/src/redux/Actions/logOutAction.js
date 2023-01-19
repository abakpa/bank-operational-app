import * as actionTypes from "../constants/loginConstant";

export const logout = (navigate) => async(dispatch) => {
    try {
        dispatch({
            type: actionTypes.LOGOUT_STAFF_SUCCESS,
        });
        localStorage.removeItem("login");
        navigate("/login");
    } catch (error) {
        dispatch({
            type: actionTypes.LOGOUT_STAFF_FAIL,
            payload: error.response.data,
        });
    }
};