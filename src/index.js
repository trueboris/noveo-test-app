import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./reducers";
import Login from "./components/Login";
import Explorer from "./components/Explorer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { paths } from "./config";
import rootSaga from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlware = [sagaMiddleware, thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path={paths.root} component={App} />
      <Route path={paths.login} component={Login} />
      <Route path={paths.explorer} component={Explorer} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
