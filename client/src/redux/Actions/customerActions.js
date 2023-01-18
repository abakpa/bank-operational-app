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
    (postCustomerWithdrawal) => async(dispatch) => {
        try {
            dispatch({ type: actionTypes.POST_CUSTOMER_REQUEST });

            const { data } = await axios.post(
                "/api/teller/customerwithdrawal",
                postCustomerWithdrawal
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