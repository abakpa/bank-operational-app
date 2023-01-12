import * as actionTypes from "../constants/hrConstant";
import axios from "axios";

export const createHrDepartment = (department) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_DEPARTMENT_REQUEST });

        const { data } = await axios.post("/api/hr", { department });
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //     "Content-Type": "multipart/form-data",
        //   },
        // });

        dispatch({
            type: actionTypes.POST_DEPARTMENT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_DEPARTMENT_FAIL,
            payload: error,
        });
    }
};

export const createHrRank = (rank) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_RANK_REQUEST });

        const { data } = await axios.post("/api/hr", { rank });
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //     "Content-Type": "multipart/form-data",
        //   },
        // });

        dispatch({
            type: actionTypes.POST_RANK_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_RANK_FAIL,
            payload: error,
        });
    }
};

export const createHrRole = (role) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_ROLE_REQUEST });

        const { data } = await axios.post("/api/hr", { role });
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //     "Content-Type": "multipart/form-data",
        //   },
        // });

        dispatch({
            type: actionTypes.POST_ROLE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_ROLE_FAIL,
            payload: error,
        });
    }
};