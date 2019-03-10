import "../CSS/signup.css";
import React from "react";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      college: "",
      password: "",
      password2: "",
      contact: "",
      university: "",
      faculty: "",
      semester: "",
      isRegister: "false"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleInputSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      college: this.state.college,
      password: this.state.password,
      password2: this.state.password2,
      contact: this.state.contact,
      university: this.state.university,
      faculty: this.state.faculty,
      semester: this.state.semester
    };
    axios
      .post("api/users/signup", { user })
      .then(res => {
        console.log(res);
        this.setState({ isRegister: "true" });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isRegister === "true") {
      return <Redirect to={"/signin"} />;
    }
    return (
      <div>
        <div className="wrapper clearfix">
          <div className="panel-1">
            <h1 align="center">PADANTEY</h1>
            <h2 align="center">---SIGN UP---</h2>
            <form action="#" method="" align="center">
              <div className="element" align="center">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <input
                  type="text"
                  name="college"
                  placeholder="College"
                  required
                  value={this.state.college}
                  onChange={this.handleInputChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  required
                  value={this.state.password2}
                  onChange={this.handleInputChange}
                />
                <input
                  type="number"
                  name="contact"
                  placeholder="Contact Number"
                  required
                  value={this.state.contact}
                  onChange={this.handleInputChange}
                />
                <div className="box">
                  <label htmlFor="University-select" />
                  <select
                    name="university"
                    id="University-select"
                    onChange={this.handleInputChange}
                  >
                    <option value="tu">Tribhuvan University</option>
                    <option value="ku">Kathmandu University</option>
                    <option value="pu">Pokhara University</option>
                  </select>
                  <br />
                  <label htmlFor="Faculty-select" />
                  <select
                    name="faculty"
                    id="Faculty-select"
                    onChange={this.handleInputChange}
                  >
                    <option value="bct">Computer Engineering</option>
                    <option value="bex"> Electronics Engineering</option>
                    <option value="bel"> Electrical Engineering</option>
                    <option value="bge"> Geomatics Engineering</option>
                    <option value="bce"> Civil Engineering</option>
                    <option value="bme">Mechanical Engineering</option>
                  </select>
                  <br />
                  <label htmlFor="semester-select" />
                  <select
                    name="semester"
                    id="semester-select"
                    onChange={this.handleInputChange}
                  >
                    <option value="1">First Semester</option>
                    <option value="2">Second Semester</option>
                    <option value="3">Third Semester</option>
                    <option value="4">Fourth Semester</option>
                    <option value="5">Fifth Semester</option>
                    <option value="6">Sixth Semester</option>
                    <option value="7">Seventh Semester</option>
                    <option value="8"> Eighth Semester</option>
                  </select>
                </div>

                <div className="btn ">
                  <button
                    className="btn btn-primary "
                    type="submit"
                    onClick={this.handleInputSubmit}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <p align="center">
              Already have an account ? <NavLink to={"/signin"}>Log In</NavLink>
            </p>
          </div>

          <div className="panel-2" />
        </div>
      </div>
    );
  }
}
export default SignUp;
