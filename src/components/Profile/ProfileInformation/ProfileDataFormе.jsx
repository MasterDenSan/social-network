import React from "react";
import style from './ProfileInfo.module.css';
import {createrField, Input, TextArea} from "../../ItemsControl/FormControl/FormControls";
import {reduxForm} from "redux-form";
import styles from "../../ItemsControl/FormControl/FormControl.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <button>Save change</button>
        { error && <div className={styles.loginControlError}>
            {error}
        </div>}
        <div>
            <b>Full Name
            </b>: {createrField(Input, "fullName", "Full Name", [])}
        </div>
        <div>
            <b>Looking for a job</b>: {createrField("input", "lookingForAJob", null, [], {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>: {createrField(TextArea, "lookingForAJobDescription", "My professional skills", [])}
        </div>
        <div>
            <b>About me</b>: {createrField(TextArea, "aboutMe", "About me", [])}
        </div>
        <div className={style.contacts}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}><b>{key}</b>: {createrField(Input, "contacts." + key, key, [])}</div>
        })}
        </div>
    </form>
}

let ProfileDataFormReduxForm = reduxForm({form: 'profileEdit'})(ProfileDataForm)
export default ProfileDataFormReduxForm;

