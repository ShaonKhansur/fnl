import axios from 'axios';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";


/* Auth Actions */
export const loginRequest = (dispatch, user) => {
    dispatch({ type: LOGIN_REQUEST });

    axios.post("http://localhost:5000/api/auth", user).then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        localStorage.setItem('auth', JSON.stringify({
            isLogin: true,
            token: res.data,
            user: null,
            loading: false,
        }));
    }).catch(err => {
        dispatch({ type: LOGIN_FAILED });
    })
}

export const logoutRequest = (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    localStorage.removeItem('auth');
}