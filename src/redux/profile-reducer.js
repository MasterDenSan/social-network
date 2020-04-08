import {profileAPI} from "../DAL/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
    posts: [
        {id: 1, massege: "Hi meeen", likeCounter: 55},
        {id: 2, massege: "My first post", likeCounter: 16}
    ],
    profile: null,
    userStatus: ""
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, massege: action.postBody, likeCounter: 0}]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case SET_USER_STATUS:
            return {
                ...state, userStatus: action.userStatus
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(f => f.id !== action.postId)
            }
        default:
            return state
    }
}

//Actions
export const addPostActionCreator = (postBody) =>
    ({type: ADD_POST, postBody});
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile: profile});
export const setUserStatus = (userStatus) =>
    ({type: SET_USER_STATUS, userStatus: userStatus});
export const deletePost = (postId) =>
    ({type: DELETE_POST, postId});

//Thunks
export const getUserProfile = (userId) => {

    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}
export const getUserStatus = (userId) => {

    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
        })
    }
}
export const updateUserStatus = (userStatus) => {

    return (dispatch) =>
        profileAPI.updateStatus(userStatus).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(userStatus));
            }})
    }



export default profileReducer;