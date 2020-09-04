import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../ItemsControl/Prealoader/Preloader";
import ProfileStatusWhuthHook from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/userPhoto.png"
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, savePhoto, userStatus, updateUserStatus, isOwner, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    if (!profile) {
        return <Preloader/>
    }
    let onAddNewPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }


    return (<div>
            Status: <ProfileStatusWhuthHook
            userStatus={userStatus}
            updateUserStatus={updateUserStatus}/>
            <div>
                <img className={style.user__photo} src={profile.photos.large ? profile.photos.large : userPhoto}
                     alt={""}/>
                {isOwner && <input type={"file"} onChange={onAddNewPhoto}/>}
                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    )
}


export default ProfileInfo;