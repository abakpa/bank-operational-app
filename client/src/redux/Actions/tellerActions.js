import * as actionTypes from "../constants/tellerConstant";
import axios from "axios";

export const createTeller = (staffNumber) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_TELLER_REQUEST });
        console.log("teller", staffNumber);
        const { data } = await axios.post("/api/teller", { staffNumber });

        dispatch({
            type: actionTypes.POST_TELLER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_TELLER_FAIL,
            payload: error,
        });
    }
};