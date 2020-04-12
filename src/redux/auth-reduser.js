import {authAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "social-Network/auth-reduser/SET_USER_DATA";


let initialState = {
    idUser: null,
    email: null,
    login: null,
    isAuth: false
};


const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

//Actions
export const setUserData = (idUser, login, email, isAuth) =>
    ({type: SET_USER_DATA, payload: {idUser, login, email, isAuth}});

//Thunks
export const getAuth = () => {
    return async (dispatch) => {
        let response = await authAPI.getMeAuth();
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setUserData(id, login, email, true))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            let action = response.data.messages.length > 0 ? response.data.messages[0] : "Some error!";
            dispatch(stopSubmit("loginForm", {_error: action}));
        }
    }
}

export default authReduser;