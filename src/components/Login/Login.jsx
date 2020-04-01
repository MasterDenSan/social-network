import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../Utilits/Validators";
import {Input} from "../ItemsControl/FormControl/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import styles from "../../components/ItemsControl/FormControl/FormControl.module.css"


//объявляем валидаторы
const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} component={Input} name={"email"} validate={[required, maxLength50, minLength8]}></Field>
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} validate={[required, maxLength50, minLength8]} name={"password"} type={"password"}></Field>
            </div>
            <div>
                <Field type={"checkbox"} component={"input"} name={"rememberMe"}></Field><span>запомни меня</span>
            </div>
            <div className={styles.loginControlError}>
                {props.error}
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}


let LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)


const Login = (props) => {
    let onSubmit = (data) => {
        props.login(data.email, data.password, data.rememberMe)}

        if(props.isAuth){
            return <Redirect to={"/profile"}/>}

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);