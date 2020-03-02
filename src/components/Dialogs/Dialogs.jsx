import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Massege from "./Massege/Massege";


const Dialogs = (props) => {

    let dialogElements = [props.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>),
        props.friends.map(d => <DialogsItem img={d.img}/>)]
    let massageElements = props.dialogsPage.masseges.map(m => <Massege massage={m.massege}/>)


    let addMessage = () => {
        props.addDialogMessage()
    }

    let onChangeText = (e) => {
        let body = e.target.value
        props.updateNewMessage(body)
    }


    return (
        <div className={s.container}>
            <div>
                {dialogElements[1]}
            </div>
            <div className={s.dialogs}>
                {dialogElements[0]}
            </div>
            <div className={s.chat}>
                {massageElements}
                <div>
                    <textarea onChange={onChangeText}
                              value={props.dialogsPage.newDilogText}
                              placeholder={"Enter your message"}/>
                </div>
                <div>
                    <button onClick={addMessage}>AddMassege</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;