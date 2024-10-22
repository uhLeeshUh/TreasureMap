import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

const Auth = ({
  component: Component,
  path,
  loggedIn,
  exact,
  history,
  location
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        if (!loggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return loggedIn ? <Component {...props} /> : <Redirect to="/signin" />;
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
