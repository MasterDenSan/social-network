import React from 'react';
import s from './Profile.module.css';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <main className={s.main}>
            <ProfileInformation
                profile={props.profile}
                userStatus={props.userStatus}
                updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </main>

    );
}


export default Profile;