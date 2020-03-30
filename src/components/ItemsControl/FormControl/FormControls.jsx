import React from "react";
import style from "./FormControl.module.css";


const FormControls = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControls {...props}> <input {...input} {...restProps}/> </FormControls>
}

export const TextArea = (props) => {
    const {input, meta, ...restProps} = props;
    return  <FormControls {...props}> <textarea {...input} {...restProps}/> </FormControls>
}




