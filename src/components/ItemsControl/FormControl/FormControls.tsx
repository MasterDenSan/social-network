import React, {FC} from "react";
import style from "./FormControl.module.css";
import {Field} from "redux-form";
import {FormControlsI} from "./types";




const FormControls:FC<FormControlsI> = ({children, meta: {touched, error}}) => {
    let hasError = touched && error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props;
    return <FormControls {...props}> <input {...input} {...restProps}/> </FormControls>
}

export const TextArea = (props: any) => {
    const {input, meta, ...restProps} = props;
    return  <FormControls {...props}> <textarea {...input} {...restProps}/> </FormControls>
}


export const createrField = (
    component: any,
    name: string,
    placeholder: string | null,
    validate: any,
    props= {},
    text = "") => <div>
    <Field placeholder={placeholder}
           component={component}
           name={name}
           validate={validate}
           {...props}></Field> {text}
</div>

export default FormControls





