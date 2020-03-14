import React from 'react';
import s from './Profile.module.css';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <main className={s.main}>
            <ProfileInformation profile={props.profile}/>
            <MyPostsContainer/>
        </main>

    );
}


export default Profile;