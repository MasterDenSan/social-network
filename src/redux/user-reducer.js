import {usersAPI} from "../DAL/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const SET_ALL_ITEMS = "SET_ALL_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_PROGRESING = "TOGGLE_IS_PROGRESING";
const TOGGLE_IS_PROCESSING = "TOGGLE_IS_PROCESSING";

let initialState = {
    users: [],
    allItems: 20,
    countItems: 10,
    currentPage: 1,
    isProgresing: true,
    isProcessingArr: []

};


const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SETUSERS:
            return {
                ...state, users: action.users
            }
        case SET_ALL_ITEMS:
            return {
                ...state, allItems: action.allItems
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_IS_PROGRESING:
            return {
                ...state, isProgresing: action.isProgresing
            }
        case TOGGLE_IS_PROCESSING:
            return {
                ...state,
                isProcessingArr: action.isProgresing
                    ? [...state.isProcessingArr, action.userId]
                    : state.isProcessingArr.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//Actions
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SETUSERS, users});
export const setAllItems = (countUsers) => ({type: SET_ALL_ITEMS, allItems: countUsers});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsProgresing = (isProgresing) => ({type: TOGGLE_IS_PROGRESING, isProgresing});
export const toggleIsProcessing = (isProgresing, userId) => ({type: TOGGLE_IS_PROCESSING, isProgresing, userId});


//Thunks
export const getUsers = (currentPage, countItems) => {

    return (dispatch) => {
        dispatch(toggleIsProgresing(true));
        usersAPI.getUsers(currentPage, countItems).then(data => {
            dispatch(toggleIsProgresing(false));
            dispatch(setUsers(data.items));
            dispatch(setAllItems(data.totalCount));
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsProcessing(true, userId));
        usersAPI.unfollow(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(unfollowAC(userId));
            }
            dispatch(toggleIsProcessing(false, userId));
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsProcessing(true, userId));
        usersAPI.follow(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(followAC(userId));
            }
            dispatch(toggleIsProcessing(false, userId));
        })
    }
}





export default userReduser;