import {authAPI, securutiAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";
import {AppDispatchType} from "./redux-store";

const SET_USER_DATA = "social-Network/auth-reduser/SET_USER_DATA";
const SET_CAPTCHA_URL_SUCCESS = "social-Network/auth-reduser/SET_CAPTCHA_URL_SUCCESS";

type initialStateType = {
    idUser?: number | null
    email?: string | null
    login?: string | null
    isAuth?: boolean
    captcha?: string | null
}

let initialState: initialStateType = {
    idUser: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};


const authReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

//Actions
export const setUserData = (
    idUser?: number | null,
    login?: string | null,
    email?: string | null,
    isAuth?: boolean,
    captcha?: string | null
) =>
    ({type: SET_USER_DATA, payload: {idUser, login, email, isAuth, captcha}});
export const setCaptchaUrlSuccess = (captcha: string) =>
    ({type: SET_CAPTCHA_URL_SUCCESS, payload: {captcha}});

//Thunks
export const getAuth = () => {
    return async (dispatch: AppDispatchType) => {
        let response = await authAPI.getMeAuth();
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setUserData(id, login, email, true))
        }
    }
}

export const logout = () => {
    return async (dispatch: AppDispatchType) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    }
}

export const login = (email: string, password: string, rememberMe: any, captcha: any) => {
    return async (dispatch: AppDispatchType) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let action = response.data.messages.length > 0 ? response.data.messages[0] : "Some error!";
            dispatch(stopSubmit("loginForm", {_error: action}));
        }
    }
}
export const getCaptchaUrl = () => async (dispatch: AppDispatchType) => {
    const response = await securutiAPI.getCaptcha();
    const captcha = response.data.url;
    dispatch(setCaptchaUrlSuccess(captcha));
}


export default authReduser;