import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../../routes';
import { authOperations } from '../../redux/auth';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Header from '../header/Header';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map(route =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute
                  key={route.label}
                  {...route}
                  restricted={route.restricted}
                />
              ),
            )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
