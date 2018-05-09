import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      image_url: "Optional"
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
    this.props.action(this.state).then(() => {
      this.props.history.push('/');
    });
  }

  render(){
    let avatar;
    if (this.props.buttonText === "SIGN UP"){
      avatar = <label>PROFILE IMAGE
      <input className="session-label" type="text" value={this.state.image_url} onChange={this.handleChange("image_url")}></input>
      </label>;
    } else {
      avatar = '';
    }

    return (
      <main className="session">
        <div className="session-form">
          <h1 className="session-title">{this.props.headerText}</h1>
          <div className="altText">
            {this.props.alternateText}
              <Link className="link" to={this.props.linkedRoute}>{this.props.alternateLinkText}</Link>
            <p>{this.props.errors}</p>
          </div>
          <form onSubmit={this.submit} className="form-body">
            <label className="session-label">USERNAME
              <input className="username" type="text" value={this.state.username} onChange={this.handleChange("username")} />
            </label>

            <label className="session-label">PASSWORD
              <input className="password" type="password" value={this.state.password} onChange={this.handleChange("password")} />
            </label>

            {avatar}
            <button className="session-button">{this.props.buttonText}</button>
          </form>
        </div>
      </main>
    );
  }

}

export default SessionForm;
