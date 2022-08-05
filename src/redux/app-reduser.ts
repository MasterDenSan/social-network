import {getAuth} from "./auth-reduser";

const SET_INITIALIZED = "social-Network/app-reduser/SET_INITIALIZED";

type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false,
};


const appReduser = (state = initialState, action:any): initialStateType  => {
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

type setInitializedSuccessType = {
    type: typeof SET_INITIALIZED
}

//Actions
export const setInitializedSuccess = (): setInitializedSuccessType  => ({type: SET_INITIALIZED});

//Thunks
export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuth())
    //dispatch(someesle1())
    //dispatch(someesle2())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccess())
        })
}


export default appReduser;