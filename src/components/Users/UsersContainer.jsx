
import {followAC, setUsers, unfollowAC} from "../redux/user-reducer";
import {connect} from "react-redux";
import Users from "./Users";

const  getStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const getDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (users) => {dispatch(setUsers(users))}
    }
};

const  UsersContainer = connect(getStateToProps, getDispatchToProps)(Users);

export default UsersContainer;
