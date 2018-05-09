import React from 'react';
import SessionDropdownItem from './session_dropdown_item';
import { connect } from 'react-redux';

class SessionDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    };
  }

  render(){
    let userHover;
    if (this.state.hovered){
      userHover = <SessionDropdownItem user={this.props.user} />;
    }

    let icon;
    if (this.props.user){
      icon = <img src="image_url" alt="user image"></img>;
    } else {
      icon = <i className="fas fa-user"></i>;
    }

    return (
    <div>
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


export default connect(mapStateToProps)(SessionDropdown);



//item can deal with conditionally rendering links

//give SessionDropdown user prop, which it gives to item
