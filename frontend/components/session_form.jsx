import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      image_url: ""
    };

    this.submit = this.submit.bind(this);
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  submit(e){
    e.preventDefault();
    this.props.action(this.state);
    // this.props.history.push('/');
  }

  render(){
    let avatar;
    if (this.props.buttonText === "SIGN UP"){
      avatar = <label>Avatar Image
      <input type="text" value={this.state.image_url} onChange={this.handleChange("image_url")} />
      </label>;
    } else {
      avatar = '';
    }

    return (
      <div className="session">
        <div className="session-form">
          <h1 className="session-title">{this.props.headerText}</h1>
          <div className="altText">
            {this.props.alternateText}
              <Link className="link" to={this.props.linkedRoute}>{this.props.alternateLinkText}</Link>
            <p>
              {this.props.errors}
            </p>
          </div>
          <form onSubmit={this.submit} className="form-body">
            <label className="session-label">USERNAME
            <input className="username" type="text" value={this.state.username} onChange={this.handleChange("username")} />
            </label>
            <br></br>
            <label className="session-label">PASSWORD
            <input className="password" type="password" value={this.state.password} onChange={this.handleChange("password")} />
            </label>
            <br></br>
            {avatar}
            <button className="session-button">{this.props.buttonText}</button>
          </form>
        </div>
      </div>
    );
  }
  // how do I handle the avatar input field?



//headerText
//alternateText
//container should wrap this with router
// linkedRoute
// alternateLinkText
//buttonText
//action

}

export default SessionForm;
