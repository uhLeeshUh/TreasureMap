import React from 'react';
import SessionDropdownItem from './session_dropdown_item';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class SessionDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e){
    this.setState({hovered: (!this.state.hovered)});
  }

  render(){
    let icon;
    if (this.props.user){
      icon = <img className="user-icon" src="image_url" alt="user image"></img>;
      } else {
        icon = <i className="fas fa-user" id="user-icon"></i>;
        }

    let userHover;
    if (this.state.hovered){
    }

    userHover = <SessionDropdownItem user={this.props.user} logout={this.props.logout}/>;

    return (
    <div className="dropdown-div" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
      {icon}
      {userHover}
    </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionDropdown);



//item can deal with conditionally rendering links

//give SessionDropdown user prop, which it gives to item
