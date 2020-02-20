import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Massege from "./Massege/Massege";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Victor" },
        {id: 2, name: "Dima" },
        {id: 3, name: "Jon" },
        {id: 4, name: "Tony" },
    ]

    let massegesData = [
        {id: 1, massege: "Yo"},
        {id: 2, massege: "My first massage Yo."},
        {id: 3, massege: "Yo Yo Yo"},
        {id: 4, massege: "Hi mannnnn"}
    ]

    let dialogElements = dialogsData.map (d => <DialogsItem name = {d.name} id = {d.id} />)
    let massageElements = massegesData.map (m => <Massege massage = {m.massege} />)
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                { dialogElements }
            </div>
            <div className={s.chat}>
               { massageElements }
            </div>
        </div>

    );
}

export default Dialogs;