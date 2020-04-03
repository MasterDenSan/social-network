import {createSelector} from "reselect";

//training selectors
const getUsersSelector = (state)=> {
   return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users)=>{
    return users.filter(f => true)
})





export const getAllItems = (state)=> {
    return state.usersPage.allItems
}

export const getCountItems = (state)=> {
    return state.usersPage.countItems
}

export const getCurrentPage = (state)=> {
    return state.usersPage.currentPage
}

export const getIsProgresing = (state)=> {
    return state.usersPage.isProgresing
}

export const getIsProcessingArr = (state)=> {
    return state.usersPage.isProcessingArr
}
