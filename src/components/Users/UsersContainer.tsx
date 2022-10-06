import {
    follow, requestUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Preloader from "../ItemsControl/Prealoader/Preloader";
import {compose} from "redux";
import {
    getAllItems,
    getCountItems,
    getCurrentPage,
    getIsProcessingArr,
    getIsProgresing, getPozitionSize,
    getUsers
} from "../../redux/users-selectors";
import {RootState} from "../../redux/redux-store";
import {IUsersComponentAPI} from "./types";
import Users from "./Users";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class UsersComponentAPI extends React.Component<IUsersComponentAPI> {

    componentDidMount() {
        const {requestUsers, currentPage, countItems} = this.props;
        requestUsers(currentPage, countItems);
    }

    onCangedPage = (pageNamber: number) => {
        const {setCurrentPage, requestUsers, countItems} = this.props;
        setCurrentPage(pageNamber)  //page selection
        requestUsers(pageNamber, countItems);
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
                pozitionSize={this.props.pozitionSize}
            />
        </>
    }
}


/*const getStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        allItems: state.usersPage.allItems,
        countItems: state.usersPage.countItems,
        currentPage: state.usersPage.currentPage,
        isProgresing: state.usersPage.isProgresing,
        isProcessingArr: state.usersPage.isProcessingArr
    }
}*/

const getStateToProps = (state: RootState) => {
    return {
        users: getUsers(state),
        allItems: getAllItems(state),
        countItems: getCountItems(state),
        currentPage: getCurrentPage(state),
        isProgresing: getIsProgresing(state),
        isProcessingArr: getIsProcessingArr(state),
        pozitionSize: getPozitionSize(state)
    }
}

export  default compose(
    withAuthRedirect,
    connect(getStateToProps,{follow, unfollow, setCurrentPage, requestUsers})
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
