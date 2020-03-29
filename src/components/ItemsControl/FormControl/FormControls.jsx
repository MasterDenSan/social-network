import React from "react";
import style from "./FormControl.module.css";


const FormControl = ({input, meta, ...props}) => {
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
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}

export const TextArea = (props) => {
    const {input, meta, ...restProps} = props;
    return  <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
}




