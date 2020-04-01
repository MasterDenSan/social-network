import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navigationReducer from "./navigation-reducer";
import userReduser from "./users-reducer";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./app-reduser";




let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    navigation: navigationReducer,
    usersPage: userReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
export default store;