import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsContainer = (state) => ({
    isAuth: state.auth.isAuth
})


export const withAuthRedirect = (Component) => {

    class AuthRedirect extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    let ConectRedirectAuthComponent = connect(mapStateToPropsContainer)(AuthRedirect);
    return ConectRedirectAuthComponent;
}

