import { connect } from "react-redux";
import { login, clearErrors } from "../actions/session_actions";
import SessionForm from "./session_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    headerText: "Sign In to Treasure Map",
    alternateText: "NOT A MEMBER?",
    linkedRoute: "/signup",
    alternateLinkText: "JOIN",
    buttonText: "SIGN IN",
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: user => dispatch(login(user)),
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
