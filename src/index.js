import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./components/redux/redux-store";
import StoreContext, {Provider} from "./Store-context";


export let rerenderAllTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderAllTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderAllTree(state)
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
