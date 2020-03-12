import {followAC, setAllItemsAC, setCurrentPageAC, setUsers, unfollowAC} from "../redux/user-reducer";
import {connect} from "react-redux";
import Users from "./Users";

const getStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        allItems: state.usersPage.allItems,
        countItems: state.usersPage.countItems,
        currentPage: state.usersPage.currentPage,
    }
}
const getDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNamber) => {
            dispatch(setCurrentPageAC(pageNamber))
        },
        setAllItems: (AllItems) => {
            dispatch(setAllItemsAC(AllItems))
        }
    }
};

const UsersContainer = connect(getStateToProps, getDispatchToProps)(Users);

export default UsersContainer;
