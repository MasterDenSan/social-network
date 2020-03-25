import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navigationReducer from "./navigation-reducer";
import userReduser from "./user-reducer";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";




let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navigation: navigationReducer,
    usersPage: userReduser,
    auth: authReduser,
    form: formReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
export default store;