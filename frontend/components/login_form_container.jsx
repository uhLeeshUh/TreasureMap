import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    headerText: "Sign In to Treasure Map",
    alternateText: "Not a member yet?",
    linkedRoute: "/signup",
    alternateLinkText: "SIGN UP",
    buttonText: "SIGN IN",
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
