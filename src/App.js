import React, { PureComponent } from "react";
import { Route, Redirect, Switch } from "react-router";
import { Provider } from "react-redux";

import { Routing } from "./data/routing";

import store from "./store";

import "./style/index.scss";

import Layout from "./components/generalComponents/Layout";
import Contacts from "./components/contactComponets";
import Main from "./components/mainPageComponents";

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Layout>
            <Route
              exact
              path={[Routing.Base, Routing.Main]}
              component={Main}
            />
            <Route exact path={Routing.Contacts} component={Contacts} />
          </Layout>
        </Switch>
      </Provider>
    );
  }
}
