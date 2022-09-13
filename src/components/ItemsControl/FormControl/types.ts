import React from "react";
import {BaseFieldProps} from "redux-form/lib/Field";

export interface FormControlsI {
    children: React.ReactNode
    meta: {
        touched: any
        error: string
    }
}

export interface createrFieldI extends BaseFieldProps{
    component: any
    name: string
    placeholder: string
    validate: any
    text: string
    props: any
}