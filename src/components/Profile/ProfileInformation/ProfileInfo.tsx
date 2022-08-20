import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../ItemsControl/Prealoader/Preloader";
import ProfileStatusWhuthHook from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/images/userPhoto.png"
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataFormе";
import {FC} from "react";

export type ProfileInfoT = {
    profile: any
    savePhoto: (photo: any) => void
    userStatus: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    saveProfile: (data: any) => Promise<any>
}

const ProfileInfo: FC<ProfileInfoT> = ({profile, savePhoto, userStatus, updateUserStatus, isOwner, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData: any) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    }

    if (!profile) {
        return <Preloader/>
    }
    let onAddNewPhoto = (e: any) => {
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
                    // @ts-ignore next line
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    )
}


export default ProfileInfo;