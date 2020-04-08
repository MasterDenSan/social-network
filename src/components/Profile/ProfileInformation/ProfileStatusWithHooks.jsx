import React, {useState, useEffect} from "react";


 const ProfileStatusWhuthHook = (props) => {

let [editMode, setEditMode] = useState(false)
let [status, setStatus] = useState(props.userStatus)

     useEffect(() => {
         setStatus(props.userStatus)
     }, [props.userStatus])


     let activeteEditMode = () => {
         setEditMode(true)
     }

     let deactiveteEditMode = () => {
         setEditMode(false)
         props.updateUserStatus(status)
     }

     let onCangeUserStatus = (e) => {
         setStatus(e.currentTarget.value)
     }

        return (<div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activeteEditMode}>{props.userStatus || "Введите свой статус!"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={deactiveteEditMode}
                           value={status}
                           onChange={onCangeUserStatus}/>
                </div>
                }
            </div>
        )

}

export default ProfileStatusWhuthHook;