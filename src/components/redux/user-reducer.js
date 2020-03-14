const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const SET_ALL_ITEMS = "SET_ALL_ITEMS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_PROGRESING = "TOGGLE_IS_PROGRESING";

let initialState = {
    users: [],
    allItems:20,
    countItems:5,
    currentPage:1,
    isProgresing: false

};


const userReduser = (state= initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
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
        default:
            return state
    }
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SETUSERS, users});
export const setAllItems = (countUsers) => ({type: SET_ALL_ITEMS, allItems: countUsers});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsProgresing = (isProgresing) => ({type: TOGGLE_IS_PROGRESING, isProgresing});


export default userReduser;