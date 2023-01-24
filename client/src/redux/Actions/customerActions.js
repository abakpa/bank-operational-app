import * as actionTypes from "../constants/customerConstant";
import axios from "axios";

export const createCustomer = (postCustomer) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_CUSTOMER_REQUEST });
        console.log(postCustomer);

        const { data } = await axios.post("/api/customer", postCustomer);

        dispatch({
            type: actionTypes.POST_CUSTOMER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_CUSTOMER_FAIL,
            payload: error,
        });
    }
};

export const getAllCustomer = () => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_CUSTOMER_REQUEST });

        const { data } = await axios.get("/api/customer");

        dispatch({
            type: actionTypes.GET_CUSTOMER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CUSTOMER_FAIL,
            payload: error,
        });
    }
};

export const getCustomer = (accountNumber) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_CUSTOMER_REQUEST });
        console.log(accountNumber);
        const { data } = await axios.post("/api/customer/single", {
            accountNumber,
        });

        dispatch({
            type: actionTypes.POST_CUSTOMER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_CUSTOMER_FAIL,
            payload: error,
        });
    }
};

export const tellerToCustomerDeposit =
    (postCustomerDeposit, token) => async(dispatch) => {
        try {
            dispatch({ type: actionTypes.POST_CUSTOMER_REQUEST });
            console.log(postCustomerDeposit, token);
            const { data } = await axios.post(
                "/api/teller/customerdeposit",
                postCustomerDeposit, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            dispatch({
                type: actionTypes.POST_CUSTOMER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.POST_CUSTOMER_FAIL,
                payload: error,
            });
        }
    };

export const tellerToCustomerWithdrawal =
    (postCustomerWithdrawal, token) => async(dispatch) => {
        try {
            dispatch({ type: actionTypes.POST_CUSTOMER_REQUEST });

            const { data } = await axios.post(
                "/api/teller/customerwithdrawal",
                postCustomerWithdrawal, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            dispatch({
                type: actionTypes.POST_CUSTOMER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.POST_CUSTOMER_FAIL,
                payload: error,
            });
        }
    };