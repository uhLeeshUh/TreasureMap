import React from 'react';
import SessionDropdownItem from './session_dropdown_item';
import { connect } from 'react-redux';
import { logout, getUser } from '../actions/session_actions';

class SessionDropdown extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   hovered: false
    // };
    // this.handleHover = this.handleHover.bind(this);
    // this.retrieveImage = this.retrieveImage.bind(this);
  }

  // handleHover(e){
  //   this.setState({hovered: (!this.state.hovered)});
  // }

  // retrieveImage(){
  //   this.props.retrieveImage(user);
  // }

  render(){
    let icon;
    if (this.props.user){
      icon = <img className="user-icon" src={this.props.user.image_url} alt="user image"></img>;
      } else {
        icon = <i className="fas fa-user" id="user-icon"></i>;
        }

    return (
    <div className="dropdown-div">
      {icon}
      <SessionDropdownItem user={this.props.user} logout={this.props.logout}/>
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
    logout: () => dispatch(logout()),
    retrieveImage: (user) => dispatch(getUser(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionDropdown);
