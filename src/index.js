import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./data/reducer";
import ReduxThunk from "redux-thunk";
import Logger from "redux-logger";

const store = createStore(reducers, applyMiddleware(Logger, ReduxThunk));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
