import { connect } from "react-redux";
import { signup, login, clearErrors } from "../actions/session_actions";
import SessionForm from "./session_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    headerText: "Sign Up for Treasure Map",
    alternateText: "ALREADY A MEMBER?",
    linkedRoute: "/signin",
    alternateLinkText: "SIGN IN",
    buttonText: "SIGN UP",
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm)
);
//headerText
//alternateText
//container should wrap this with router
// linkedRoute
// alternateLinkText
//buttonText
//action
