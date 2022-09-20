import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduser";
import Preloader from "./components/ItemsControl/Prealoader/Preloader";
import store from "./redux/redux-store";
import {WithSuspense} from "./HOC/withSuspense";
import News from "./components/News";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    // error handler function
    allUnhandledRejection = (promiseRejectionEvent) => {
        alert('Some error');

    }
    componentDidMount() {
        this.props.initializeApp();
// error handler
        window.addEventListener("unhandledrejection", this.allUnhandledRejection)
    }

    componentWillUnmount() {
        window.addEventListener("unhandledrejection", this.allUnhandledRejection)

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app__wrapper'>
                <HeaderContainer/>
                <Navigation navigation={this.props.store.getState().navigation}/>
                <div className="app__wrapper__content">
                    <Switch>
                        <Route exact path="/"
                               render={() => <Redirect to={"/profile"}/>}/>
                        <Route path="/profile/:userId?"
                               render={WithSuspense(ProfileContainer)}/>
                        <Route path="/dialogs"
                               render={WithSuspense(DialogsContainer)}/>
                        <Route path="/users"
                               render={WithSuspense(UsersContainer)}/>
                        <Route path="/news"
                               component={News}/>
                        <Route path="/music"
                               component={Music}/>
                        <Route path="/settings"
                               component={Settings}/>
                        <Route path="/login"
                               render={() => <LoginPage/>}/>
                        <Route path="*"
                               render={() => <div>404 NOT FOUND!</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer store={store}/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetworkApp;

