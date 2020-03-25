import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={"input"} name={"login"}></Field>
            </div>
            <div>
                <Field placeholder={"Password"} component={"input"} name={"password"}></Field>
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
    let onSubmit = (formData) => {
        console.log(formData)}
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;