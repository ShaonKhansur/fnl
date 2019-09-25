import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_REQUEST } from "./AuthActions";

/* Auth State */
const auth = JSON.parse(localStorage.getItem('auth'));
export const initAuthState = auth || {
    isLogin: false,
    token: null,
    user: null,
    loading: false,
};


/* AuthReducer */
export const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            console.log(state)
            return {
                ...state,
                token: action.payload,
                isLogin: true,
                loading: false
            };
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLogin: false,
                token: null
            };
        default:
            return state;
    }
}