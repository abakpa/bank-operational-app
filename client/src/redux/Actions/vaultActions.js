import * as actionTypes from "../constants/vaultConstatnt";
import axios from "axios";

export const createVault = (vaultBranch) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_VAULT_REQUEST });

        const { data } = await axios.post("/api/vault", { vaultBranch });

        dispatch({
            type: actionTypes.POST_VAULT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_VAULT_FAIL,
            payload: error,
        });
    }
};

export const tellerPostVault = (postVault) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_VAULT_REQUEST });

        const { data } = await axios.post("/api/vault/deposit", postVault);

        dispatch({
            type: actionTypes.POST_VAULT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_VAULT_FAIL,
            payload: error,
        });
    }
};

export const tellerWithdrawalVault = (postVault) => async(dispatch) => {
    try {
        dispatch({ type: actionTypes.POST_VAULT_REQUEST });

        const { data } = await axios.post("/api/vault/withdrawal", postVault);

        dispatch({
            type: actionTypes.POST_VAULT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.POST_VAULT_FAIL,
            payload: error,
        });
    }
};

export const vaultToBankDeposit =
    (postBankDeposit, token) => async(dispatch) => {
        try {
            dispatch({ type: actionTypes.POST_VAULT_REQUEST });

            const { data } = await axios.post(
                "/api/vault/bankdeposit",
                postBankDeposit, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            dispatch({
                type: actionTypes.POST_VAULT_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.POST_VAULT_FAIL,
                payload: error,
            });
        }
    };

export const vaultToBankWithdrawal =
    (postBankWithdrawal, token) => async(dispatch) => {
        try {
            dispatch({ type: actionTypes.POST_VAULT_REQUEST });

            const { data } = await axios.post(
                "/api/vault/bankwithdrawal",
                postBankWithdrawal, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            dispatch({
                type: actionTypes.POST_VAULT_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.POST_VAULT_FAIL,
                payload: error,
            });
        }
    };