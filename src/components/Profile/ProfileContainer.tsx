import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    savePhoto,
    saveProfile,
    setUserProfile,
    updateUserStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {ProfileInfoT} from "./ProfileInformation/ProfileInfo";
import {RootState} from "../../redux/redux-store";

export interface ProfileContainerT extends ProfileInfoT {
    match: any
    meUserId: number
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
}

class ProfileContainer extends React.Component<ProfileContainerT> {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.meUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: ProfileContainerT, prevState: RootState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     updateUserStatus={this.props.updateUserStatus}
                     userStatus={this.props.userStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    meUserId: state.auth.idUser


})

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



