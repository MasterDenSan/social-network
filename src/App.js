import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className='app__wrapper'>
            <Header/>
            <Navigation navigation={props.store.getState().navigation}/>
            <div className="app__wrapper__content">
                <Route path="/profile"
                       render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;

