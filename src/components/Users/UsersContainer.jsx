import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/user-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../ItemsControl/Prealoader/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class UsersComponentAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countItems);
    }

    onCangedPage = (pageNamber) => {
        this.props.setCurrentPage(pageNamber)  //page selection
        this.props.getUsers(pageNamber, this.props.countItems);
    }

    render() {
        return <>
            {this.props.isProgresing ? <Preloader/> : null}
            <Users
                allItems={this.props.allItems}
                countItems={this.props.countItems}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onCangedPage={this.onCangedPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isProcessingArr={this.props.isProcessingArr}
            />
        </>
    }
}


const getStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        allItems: state.usersPage.allItems,
        countItems: state.usersPage.countItems,
        currentPage: state.usersPage.currentPage,
        isProgresing: state.usersPage.isProgresing,
        isProcessingArr: state.usersPage.isProcessingArr
    }
}

export  default compose(
    withAuthRedirect,
    connect(getStateToProps,{follow, unfollow, setCurrentPage, getUsers})
)
(UsersComponentAPI);



/*const getDispatchToProps = (dispatch) => {
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
        },
        toggleIsProgresing: (isProgresing) => {
            dispatch(toggleIsProgresingAC(isProgresing))
        }
    }
};*/
