import * as actionTypes from "../constants/hrConstant";
export const hrReducer = (state = { hr: {} }, action) => {
    switch (action.type) {
        case actionTypes.POST_DEPARTMENT_REQUEST:
        case actionTypes.POST_RANK_REQUEST:
        case actionTypes.POST_ROLE_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.POST_DEPARTMENT_SUCCESS:
        case actionTypes.POST_RANK_SUCCESS:
        case actionTypes.POST_ROLE_SUCCESS:
            return {
                loading: false,
                hr: action.payload,
            };
        case actionTypes.POST_DEPARTMENT_FAIL:
        case actionTypes.POST_RANK_FAIL:
        case actionTypes.POST_ROLE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// export const postHrRankReducer = (state = { rank: {} }, action) => {
//     switch (action.type) {
//         case actionTypes.POST_RANK_REQUEST:
//             return {
//                 loading: true,
//             };
//         case actionTypes.POST_RANK_SUCCESS:
//             return {
//                 loading: false,
//                 rank: action.payload,
//             };
//         case actionTypes.POST_RANK_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export const postHrRoleReducer = (state = { role: {} }, action) => {
//     switch (action.type) {
//         case actionTypes.POST_ROLE_REQUEST:
//             return {
//                 loading: true,
//             };
//         case actionTypes.POST_ROLE_SUCCESS:
//             return {
//                 loading: false,
//                 role: action.payload,
//             };
//         case actionTypes.POST_ROLE_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// };