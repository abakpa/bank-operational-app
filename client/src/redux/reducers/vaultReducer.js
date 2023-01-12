import * as actionTypes from "../constants/vaultConstatnt";

export const vaultReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case actionTypes.POST_VAULT_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.POST_VAULT_SUCCESS:
            return {
                loading: false,
                vault: action.payload,
            };
        case actionTypes.POST_VAULT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};