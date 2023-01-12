import * as actionTypes from "../constants/adminConstant";
import axios from "axios";

export const createBank = (postBank) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_ADMIN_REQUEST });

        const { data } = await axios.post("/api/bank", postBank);

        dispatch({
            type: actionTypes.POST_ADMIN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_ADMIN_FAIL,
            payload: error,
        });
    }
};