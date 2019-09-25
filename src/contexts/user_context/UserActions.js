import axios from "axios";
import { message } from "antd";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILED = "ADD_USER_REQUEFAILED";


/* User Actions */
export const addUser = (dispatch, user) => {
    console.log("from add user", user);
    dispatch({ type: ADD_USER_REQUEST });

    axios.post("http://localhost:5000/api/users", user).then(res => {
        dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
        message.info('User Successfully Registered.');
    }).catch(err => {
        dispatch({ type: ADD_USER_FAILED });
        message.error('User Failed To Registered.');
    });

}