import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password2: ""
    };
  }

  async finalizeInator() {
    const { email, first_name, last_name, password, password2 } = this.state;
    
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { email, first_name, last_name, password, password2 } = this.state;
    return (
      <div className="register">
        <div className="form">
          <h2>
            Thank You For Choosing <br /> Face-Place.
          </h2>
          <div className="top-bit">
            <div className="register-right">
              <input
                value={email}
                onChange={e => this.handleChange("email", e.target.value)}
                placeholder="Email"
                type="text"
              />
              <br />
              <br />
              <input
                value={password}
                onChange={e => this.handleChange("password", e.target.value)}
                placeholder="Password"
                type="password"
              />
              <br />
              <br />
              <input
                value={password2}
                onChange={e => this.handleChange("password2", e.target.value)}
                placeholder="Retype password"
                type="password"
              />
              <br />
              <br />
            </div>
            <div className="register-left">
              <input
                value={first_name}
                onChange={e => this.handleChange("first_name", e.target.value)}
                placeholder="First name"
                type="text"
              />
              <br />
              <br />
              <input
                value={last_name}
                onChange={e => this.handleChange("last_name", e.target.value)}
                placeholder="Last name"
                type="text"
              />
              <br />
              <br />
            </div>
          </div>
          <button onClick={() => this.finalize()} className="register-button">
            Create Account!
          </button>
          <span>Already registered? </span>
          <Link to="/">Login here!</Link>
        </div>
      </div>
    );
  }
}

export default Register;
