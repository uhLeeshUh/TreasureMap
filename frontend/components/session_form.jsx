import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      imageFile: null,
      imageUrl: null
    };

    this.submit = this.submit.bind(this);
    this.signinDemoUser = this.signinDemoUser.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  // this.props.history.push('/');
  submit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    formData.append("user[image]", this.state.imageFile);
    this.props.action(formData);
  }

  signinDemoUser() {
    var formData = new FormData();
    formData.append("user[username]", "DemoUser");
    formData.append("user[password]", "password");
    this.props.login(formData);
  }

  clearErrors() {
    this.props.clearErrors();
  }

  updateFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    let avatar;
    if (this.props.buttonText === "SIGN UP") {
      avatar = (
        <label className="session-label">
          ADD OPTIONAL PROFILE IMAGE
          <input
            className="file-input"
            type="file"
            onChange={this.updateFile}
          />
        </label>
      );
    } else {
      avatar = "";
    }

    let errors = this.props.errors.map(error => {
      return <li>{error}</li>;
    });

    return (
      <main className="session">
        <div className="session-form">
          <h1 className="session-title">{this.props.headerText}</h1>
          <div className="altText">
            {this.props.alternateText}
            <Link
              onClick={this.clearErrors}
              className="link"
              to={this.props.linkedRoute}
            >
              {this.props.alternateLinkText}
            </Link>
            <p>{errors}</p>
          </div>
          <form onSubmit={this.submit} className="form-body">
            <label className="session-label">
              USERNAME
              <input
                className="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange("username")}
              />
            </label>

            <label className="session-label">
              PASSWORD
              <input
                className="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
            </label>

            {avatar}
            <button className="session-button">{this.props.buttonText}</button>
          </form>
          <button className="demo-button" onClick={this.signinDemoUser}>
            EXPLORE AS GUEST
          </button>
        </div>
      </main>
    );
  }
}

export default SessionForm;
