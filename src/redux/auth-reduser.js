import {authAPI} from "../DAL/api";

const SET_USER_DATA = "SET_USER_DATA";


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
    return (dispatch) => {
        authAPI.getMeAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {idUser, login, email} = response.data.data
                dispatch(setUserData(idUser, login, email, true))
            }
        });

    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth());
            }
        });
    }
}
export default authReduser;