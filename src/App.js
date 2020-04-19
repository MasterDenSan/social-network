import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduser";
import Preloader from "./components/ItemsControl/Prealoader/Preloader";
import store from "./redux/redux-store";
import {WithSuspense} from "./HOC/withSuspense";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
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

