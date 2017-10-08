import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducers";

import {createEpicMiddleware} from "redux-observable";
import {rootEpic} from "./epics/index";

const epicMiddleware = createEpicMiddleware(rootEpic);

// basic store
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store with middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));