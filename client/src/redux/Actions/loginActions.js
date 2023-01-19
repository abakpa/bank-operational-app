import * as actionTypes from "../constants/loginConstant";

import axios from "axios";

export const logins = (log, navigate) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.LOGIN_STAFF_REQUEST });

        const { data } = await axios.post("/api/login/login", log);

        dispatch({
            type: actionTypes.LOGIN_STAFF_SUCCESS,
            payload: data,
        });
        localStorage.setItem("staff", JSON.stringify(data));
        navigate("/welcomepage");
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_STAFF_FAIL,
            payload: error.response.data,
        });
    }
};

export const signUp = (sign) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.SIGNUP_STAFF_REQUEST });

        const { data } = await axios.post("/api/login", sign);

        dispatch({
            type: actionTypes.SIGNUP_STAFF_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.SIGNUP_STAFF_FAIL,
            payload: error,
        });
    }
};
export const createLogin = (id, sign) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.SIGNUP_STAFF_REQUEST });

        const { data } = await axios.put(`/api/login/${id}`, sign);

        dispatch({
            type: actionTypes.SIGNUP_STAFF_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.SIGNUP_STAFF_FAIL,
            payload: error,
        });
    }
};