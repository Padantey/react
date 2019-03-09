import "../CSS/signup.css";
import React from "react";
import { NavLink } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      college: "",
      password: "",
      Cpassword: "",
      phone: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleInputSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <div className="wrapper clearfix">
          <div className="panel-1">
            <h1 align="center">PADANTEY</h1>
            <h2 align="center">---SIGN UP---</h2>
            <form action="#" method="" align="center">
              <div className="element" align="center">
                <input type="text" name="name" placeholder="Name" required />

                <input
                  type="email"
                  name="password"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="text"
                  name="college"
                  placeholder="College"
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  name="Cpassword"
                  placeholder="Confirm Password"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  required
                />
                <div className="box">
                  <label htmlFor="University-select" />
                  <select name="university" id="University-select">
                    <option value="tu">Tribhuvan University</option>
                    <option value="ku">Kathmandu University</option>
                    <option value="pu">Pokhara University</option>
                  </select>
                  <br />
                  <label htmlFor="Faculty-select" />
                  <select name="faculty" id="Faculty-select">
                    <option value="bct">Computer Engineering</option>
                    <option value="bex"> Electronics Engineering</option>
                    <option value="bel"> Electrical Engineering</option>
                    <option value="bge"> Geomatics Engineering</option>
                    <option value="bce"> Civil Engineering</option>
                    <option value="bme">Mechanical Engineering</option>
                  </select>
                  <br />
                  <label htmlFor="semester-select" />
                  <select name="semester" id="semester-select">
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
                  <button className="btn btn-primary " type="submit">
                    Log In
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
