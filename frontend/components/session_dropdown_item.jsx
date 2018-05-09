import React from 'react';
import { Link } from 'react-router-dom';

class SessionDropdownItem extends React.Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e){
    this.props.logout();
  }


  render(){
    let dropdownOne;
    let dropdownTwo;

  if (this.props.user) {
    dropdownOne = `Welcome, ${this.props.user.username}`;
    dropdownTwo = <button onClick={this.submit} class="session-dropdown-button">SIGN OUT</button>;
  } else {
    dropdownOne = <Link to="/signin">SIGN IN</Link>;
    dropdownTwo = <Link to="/signup">JOIN</Link>;
  }

  return (
    <ul className="dropdown-ul">
      <li>{dropdownOne}</li>
      <li>{dropdownTwo}</li>
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
