import React from "react";
import {reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../Utilits/Validators";
import {createrField, Input} from "../ItemsControl/FormControl/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import styles from "../../components/ItemsControl/FormControl/FormControl.module.css"


//объявляем валидаторы
const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8)
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createrField(Input, "email", "Email",[required, maxLength50, minLength8] )}
            {createrField(Input, "password","Password",[required, maxLength50, minLength8], {type: "password"})}
            {createrField("input", "rememberMe", null, [], {type: "checkbox"}, "запомни меня")}
            <div className={styles.loginControlError}>
                {error}
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