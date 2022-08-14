import {createSelector} from "reselect";
import {RootState} from "./redux-store";

//training selectors
// @ts-ignore
const getUsersSelector = (state: RootState)=> state.usersPage.users

export const getUsers = createSelector(getUsersSelector, (users)=> users.filter(Boolean))




// @ts-ignore
export const getAllItems = (state: RootState)=> state.usersPage.allItems

// @ts-ignore
export const getCountItems = (state: RootState)=> state.usersPage.countItems

// @ts-ignore
export const getCurrentPage = (state: RootState)=> state.usersPage.currentPage

// @ts-ignore
export const getIsProgresing = (state: RootState)=> state.usersPage.isProgresing

// @ts-ignore
export const getIsProcessingArr = (state: RootState)=> state.usersPage.isProcessingArr

// @ts-ignore
export const getPozitionSize = (state: RootState)=> state.usersPage.pozitionSize



