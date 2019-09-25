import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILED } from "./UserActions";

/* User State */
export const initUserState = {
    loading: false,
    users: []
}

/* User Reducer */
export const UserReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            }
        case ADD_USER_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }

}