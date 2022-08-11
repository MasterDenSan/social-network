import {createSelector} from "reselect";
import {RootState} from "./redux-store";

//training selectors
const getUsersSelector = (state: RootState)=> state.usersPage.users

export const getUsers = createSelector(getUsersSelector, (users)=> users.filter(Boolean))





export const getAllItems = (state: RootState)=> state.usersPage.allItems


export const getCountItems = (state: RootState)=> state.usersPage.countItems


export const getCurrentPage = (state: RootState)=> state.usersPage.currentPage


export const getIsProgresing = (state: RootState)=> state.usersPage.isProgresing

export const getIsProcessingArr = (state: RootState)=> state.usersPage.isProcessingArr


export const getPozitionSize = (state: RootState)=> state.usersPage.pozitionSize



