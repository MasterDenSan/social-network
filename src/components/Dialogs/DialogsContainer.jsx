import React from 'react';
import {addDialogMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let addDialogMessage = () => {
        let action = addDialogMessageActionCreator()
        props.store.dispatch(action)
    }
    let updateNewMessage = (body) => {
        let action = updateNewMessageActionCreator(body)
        props.store.dispatch(action)
    }


    return <Dialogs
        dialogsPage={state.dialogsPage}
        friends={state.navigation.friends}
        addDialogMessage={addDialogMessage}
        updateNewMessage={updateNewMessage}/>
}

export default DialogsContainer;