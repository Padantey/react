import "../CSS/signin.css";
import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      isLoggedIn: "false"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();

    const loginUser = {
      name: this.state.name,
      password: this.state.password
    };

    axios
      .post("api/user/signin", { loginUser })
      .then(res => {
        console.log(res);
        this.setState({ isLoggedIn: "true" });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoggedIn === "true") {
      return <Redirect to={"/home"} />;
    }
    return (
      <div className="wrapper clearfix">
        <div className="panel-1">
          <h1 align="center"> PADANTEY </h1>
          <h2 align="center"> -- - SIGN IN-- - </h2>
          <form action="#" method="" align="center">
            <div className="element" align="center">
              <input
                name="name"
                type="text"
                placeholder="username"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <br />
              <button type="submit" onClick={this.handleSubmit}>
                Log In
              </button>
            </div>
          </form>
          <p align="center">
            <a href="#"> FORGOT PASSWORD ? </a>
          </p>
          <p align="center">
            NOT A MEMBER ? <NavLink to={"/signup"}>CREATE MEMBER</NavLink>
          </p>
        </div>
        <div className="panel-2" />
      </div>
    );
  }
}
export default SignIn;
