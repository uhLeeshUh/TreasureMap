import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    headerText: "Sign Up for Treasure Map",
    alternateText: "Already a member?",
    linkedRoute: "/login",
    alternateLinkText: "LOG IN",
    buttonText: "SIGN UP",
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(signup(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
//headerText
//alternateText
//container should wrap this with router
// linkedRoute
// alternateLinkText
//buttonText
//action
