import React from "react";
import { Link } from "react-router-dom";

class SessionDropdownItem extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    this.props.logout();
  }

  render() {
    let dropdownOne;
    let dropdownTwo;
    let dropdownThree;

    if (this.props.user) {
      dropdownOne = "Welcome,";
      dropdownTwo = `${this.props.user.username}!`;
      dropdownThree = (
        <button onClick={this.submit} className="session-dropdown-button">
          SIGN OUT
        </button>
      );
    } else {
      dropdownOne = (
        <Link className="dropdown-enter-link" to="/signin">
          SIGN IN
        </Link>
      );
      dropdownThree = (
        <Link className="dropdown-enter-link" to="/signup">
          JOIN
        </Link>
      );
    }

    return (
      <ul className="dropdown-ul">
        <li>
          <p>{dropdownOne}</p>
          <p className="dropdown-username">{dropdownTwo}</p>
        </li>
        <li id="dropdown-divider" />
        <li>{dropdownThree}</li>
      </ul>
    );
  }
}

export default SessionDropdownItem;

//will conditionally render links

// sign in & join
//
// welcome, username!
// log out
