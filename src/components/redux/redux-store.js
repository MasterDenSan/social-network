import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navigationReducer from "./navigation-reducer";
import {combineReducers, createStore} from "redux";




let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navigation: navigationReducer
})

let store = createStore(reducers)

export default store;