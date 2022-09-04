import {usersAPI} from "../DAL/api";
import {objectChangeToArray} from "../Utilits/ObjectHelper.ts";

const FOLLOW = "social-Network/users-reduser/FOLLOW";
const UNFOLLOW = "social-Network/users-reduser/UNFOLLOW";
const SETUSERS = "social-Network/users-reduser/SETUSERS";
const SET_ALL_ITEMS = "social-Network/users-reduser/SET_ALL_ITEMS";
const SET_CURRENT_PAGE = "social-Network/users-reduser/SET_CURRENT_PAGE";
const TOGGLE_IS_PROGRESING = "social-Network/users-reduser/TOGGLE_IS_PROGRESING";
const TOGGLE_IS_PROCESSING = "social-Network/users-reduser/TOGGLE_IS_PROCESSING";

let initialState = {
    users: [],
    allItems: 20,
    countItems: 10,
    currentPage: 1,
    isProgresing: true,
    isProcessingArr: [],
    pozitionSize: 10
};


const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: objectChangeToArray(state.users, "id", action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: objectChangeToArray(state.users, "id", action.userId, {followed: false})
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
export let requestUsers = (currentPage, countItems) => {
    return async (dispatch) => {
        dispatch(toggleIsProgresing(true));
        let data = await usersAPI.getUsers(currentPage, countItems);
        dispatch(toggleIsProgresing(false));
        dispatch(setUsers(data.items));
        dispatch(setAllItems(data.totalCount));
    }
}


const unfollowFollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsProcessing(true, userId));
    let resultCode = await apiMethod(userId);
    if (resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsProcessing(false, userId));
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        unfollowFollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowAC);
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        unfollowFollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followAC);
    }
}


export default userReduser;