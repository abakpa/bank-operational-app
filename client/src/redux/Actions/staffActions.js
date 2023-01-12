import * as actionTypes from "../constants/staffConstant";
import axios from "axios";

export const createStaff = (postStaff) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_STAFF_REQUEST });

        const { data } = await axios.post("/api/staff", postStaff);

        dispatch({
            type: actionTypes.POST_STAFF_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_STAFF_FAIL,
            payload: error,
        });
    }
};

export const getStaff = (staffNumber) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_STAFF_REQUEST });
        console.log("test", staffNumber);
        const { data } = await axios.post("/api/staff/single", { staffNumber });
        console.log(data);

        dispatch({
            type: actionTypes.GET_STAFF_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_STAFF_FAIL,
            payload: error,
        });
    }
};