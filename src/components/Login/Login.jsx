import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../Utilits/Validators";
import {Input} from "../ItemsControl/FormControl/FormControl";



//обьявляем валидаторы
const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={Input} name={"login"} validate={[required, maxLength50, minLength8]}></Field>
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} validate={[required, maxLength50, minLength8]} name={"password"}></Field>
            </div>
            <div>
                <Field type={"checkbox"} component={"input"} name={"rememberMe"}></Field><span>запомни меня</span>
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}


let LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)


const Login = (props) => {
    let onSubmit = (Data) => {
        console.log(Data)}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;