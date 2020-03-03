import React from 'react';
import {addDialogMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Store-context";

const DialogsContainer = (props) => {





    return <StoreContext.Consumer>
        { (store) =>{
            let state = store.getState()
            let addDialogMessage = () => {
            let action = addDialogMessageActionCreator()
            store.dispatch(action)
        }
            let updateNewMessage = (body) => {
            let action = updateNewMessageActionCreator(body)
            store.dispatch(action)
        }

   return(
        <Dialogs
            dialogsPage={state.dialogsPage}
            friends={state.navigation.friends}
            addDialogMessage={addDialogMessage}
            updateNewMessage={updateNewMessage}/>)}}
    </StoreContext.Consumer>

}
export default DialogsContainer;