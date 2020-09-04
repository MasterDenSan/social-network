import React, {useState} from 'react';
import style from './ProfileInformation.module.css';
import Preloader from "../../ItemsControl/Prealoader/Preloader";
import ProfileStatusWhuthHook from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/userPhoto.png"
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInformation = ({profile, savePhoto, userStatus, updateUserStatus, isOwner}) => {

    const [editMode, setEditMode] = useState(false);

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
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    )
}


export default ProfileInformation;