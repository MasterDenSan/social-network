import {getAuth} from "./auth-reduser";

const SET_INITIALIZED = "social-Network/app-reduser/SET_INITIALIZED";

let initialState = {
    initialized: false
};


const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//Actions
export const setInitializedSuccess = () => ({type: SET_INITIALIZED});

//Thunks
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth())
    //dispatch(someesle1())
    //dispatch(someesle2())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })
}


export default appReduser;