import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduser";
import Preloader from "./components/ItemsControl/Prealoader/Preloader";



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
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
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

const mapStateToProps = (state) =>({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

