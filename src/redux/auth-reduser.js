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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

//Actions
export const setUserData = (idUser, login, email) =>
    ({type: SET_USER_DATA, data: {idUser, login, email}});

//Thunks
export const getAuth = () =>{
    return (dispatch) =>{
        authAPI.getMeAuth().then(data => {
            let {idUser, login, email} = data
            dispatch(setUserData(idUser, login, email))
        });

    }
}
export default authReduser;