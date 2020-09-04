import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInformation/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <main className={s.main}>
            <ProfileInfo
                profile={props.profile}
                userStatus={props.userStatus}
                updateUserStatus={props.updateUserStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </main>

    );
}


export default Profile;