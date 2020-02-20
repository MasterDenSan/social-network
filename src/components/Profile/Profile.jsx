import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInformation from './ProfileInformation/ProfileInformation';

const Profile = () => {
  return (
    <main className={s.main}>
      <ProfileInformation />
      <MyPosts />
    </main>

  );
}

export default Profile;