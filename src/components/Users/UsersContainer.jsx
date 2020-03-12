import {followAC, setAllItemsAC, setCurrentPageAC, setUsers, unfollowAC} from "../redux/user-reducer";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users";



class UsersComponentAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countItems}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setAllItems(response.data.totalCount);
        })
    }
    onCangedPage = (pageNamber) => {
        this.props.setCurrentPage(pageNamber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.countItems}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <Users
            allItems={this.props.allItems}
            countItems={this.props.countItems}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onCangedPage={this.onCangedPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />}
}


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

const UsersContainer = connect(getStateToProps, getDispatchToProps)(UsersComponentAPI);

export default UsersContainer;
