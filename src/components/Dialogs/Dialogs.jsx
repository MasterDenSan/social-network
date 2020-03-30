import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Massege from "./Massege/Massege";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../Utilits/Validators";
import {TextArea} from "../ItemsControl/FormControl/FormControls";

//обьявляем валидаторы
const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8)



//создание презинтационной компаненты
const Dialogs = (props) => {

    let dialogElements = [props.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>),
        props.friends.map(d => <DialogsItem img={d.img}/>)]
    let massageElements = props.dialogsPage.masseges.map(m => <Massege massage={m.massege}/>)


    let addMessage = (values) => {
        props.addDialogMessage(values.messageBody)
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
             <DialogsReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    );
}

//Создание формы с помощью redux-form
const DilogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field  placeholder={"Enter your message"} component={TextArea} name={"messageBody"}
                validate={[required, maxLength50, minLength8]}></Field>
            </div>
            <div>
                <button >AddMassege</button>
            </div>
        </form>
    )
}
let DialogsReduxForm = reduxForm({form: "dialogsForm"})(DilogsForm)


export default Dialogs;