import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../redux/redux-store";


export type AuthRedirectT = {
    isAuth: boolean
}

let mapStateToPropsContainer = (state:RootState) => ({
    isAuth: state.auth.isAuth
})


export const withAuthRedirect = (Component: FC<AuthRedirectT>) => {

    class AuthRedirect extends React.Component<AuthRedirectT> {

        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    let ConectRedirectAuthComponent = connect(mapStateToPropsContainer)(AuthRedirect);
    return ConectRedirectAuthComponent;
}

