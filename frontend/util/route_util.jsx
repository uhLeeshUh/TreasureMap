import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';


const Auth = ({component: Component, path, loggedIn, exact}) => {
  return (
  <Route path={path} exact={exact} render={
      (props) => {
      if (!loggedIn){
        return <Component {...props} />
      } else {
        return <Redirect to="/" />
      }
    }
  }/>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
