import React, {FC} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../Utilits/Validators";
import {TextArea} from "../ItemsControl/FormControl/FormControls";

export type DialogsT = {
    dialogsPage: {
        dialogs: {
            id: number
            name: string
        }[],
        masseges: {
            massege: string
        }[]
    },
    friends: any[],
    addDialogMessageActionCreator: (messageBody: string) => void
}

//обьявляем валидаторы
const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8)

//создание презинтационной компаненты
const Dialogs: FC<DialogsT> = (props) => {

    let dialogElements = [props.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>),
        props.friends.map(d => <DialogsItem img={d.img}/>)]
    let massageElements = props.dialogsPage.masseges.map(m => <Message massage={m.massege}/>)


    let addMessage = (values: any) => {
        props.addDialogMessageActionCreator(values.messageBody)
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
const DilogsForm:FC<InjectedFormProps>  = (props) => {
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