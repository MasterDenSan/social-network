import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../Utilits/Validators";
import {createrField, Input} from "../ItemsControl/FormControl/FormControls";
import {connect} from "react-redux";
import {getCaptchaUrl, login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import styles from "../../components/ItemsControl/FormControl/FormControl.module.css"
import {RootState} from "../../redux/redux-store";

export interface LoginFormI {
    captchaUrl: any
    getCaptchaUrl: () => void
}
export interface LoginI {
    isAuth: boolean
    login: any
    captchaUrl: any
    getCaptchaUrl: () => void
}
export interface onSubmitI {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

//объявляем валидаторы
const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8)
const LoginForm:FC<InjectedFormProps & LoginFormI>   = ({handleSubmit, error, captchaUrl, getCaptchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} >
            {createrField(Input, "email", "Email",[required, maxLength50, minLength8] )}
            {createrField(Input, "password","Password",[required, maxLength50, minLength8], {type: "password"})}
            {createrField("input", "rememberMe", null, [], {type: "checkbox"}, "запомни меня")}

            { captchaUrl && <img src = {captchaUrl} alt=""/> }
            { captchaUrl && <button onClick={getCaptchaUrl}><img className={styles.refreshCaptcha} src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-refresh-icon-png-image_4272760.jpg" alt=""/></button> }
            { captchaUrl && createrField("input", "captcha", "Input captcha", [required],)}

            { error && <div className={styles.loginControlError}>
                {error}
            </div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}


// @ts-ignore
let LoginReduxForm = reduxForm<InjectedFormProps, LoginFormI>({form: 'loginForm'})(LoginForm)


const Login: FC<LoginI> = (props) => {
    let onSubmit = (data: any) => {
        props.login(data.email, data.password, data.rememberMe, data.captcha)}

        if(props.isAuth){
            return <Redirect to={"/profile"}/>}

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} getCaptchaUrl={props.getCaptchaUrl}/>
    </div>
}

const mapStateToProps = (state: RootState)=> ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captcha
})
export default connect(mapStateToProps,{login, getCaptchaUrl})(Login);