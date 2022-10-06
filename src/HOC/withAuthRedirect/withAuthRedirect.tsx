import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {AuthRedirectI} from "./types";

let mapStateToPropsContainer = (state:RootState) => ({
    isAuth: state.auth.isAuth
})


export const withAuthRedirect = (Component: FC<AuthRedirectI>) => {

    class AuthRedirect extends React.Component<AuthRedirectI> {

        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    let ConectRedirectAuthComponent = connect(mapStateToPropsContainer)(AuthRedirect);
    return ConectRedirectAuthComponent;
}

