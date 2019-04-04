import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...componentProps }) => (
  <Route {...componentProps} render={(props) => (
    sessionStorage.user
      ? <Component {...props} />
      : <Redirect to='/sign-in' />
  )} />
)

export default PrivateRoute

