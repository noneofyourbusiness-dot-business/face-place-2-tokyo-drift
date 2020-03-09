import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  login = () => {
    const {email, password} = this.state
    axios.post("/api/login", { email, password }).then(res => {
      Swal.fire({
        icon: "success",
        title: "Logged in!",
        text: res.data.message,
        confirmButtonText: "Continue",
        timer: 1000,
        timerProgressBar: true
      }).then(result => {
        if (result.value) {
          this.props.history.push("/home");
          window.location.reload();
        } else if (result.dismiss === Swal.DismissReason.timer) {
          this.props.history.push("/home");
          window.location.reload();
        }
      });
    });
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.login();
    }
  };

  render() {
    return (
      <div className = "login">
        <form className = 'login-form'>
        <h1 className = 'loginTitle'>Welcome to Face Place.</h1>
        <p className = 'loginText'>Email</p>
        <input
          type="text"
          placeholder="Email"
          onChange={e => this.handleChange("email", e.target.value)}
          value={this.state.email}
        />
        <p className = 'loginText'>Password</p>
        <input
          type="password"
          placeholder="password"
          onChange={e => this.handleChange("password", e.target.value)}
          value={this.state.password}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button
          onClick={() => this.login()}
          className="loginButton"
        >
          Login
        </button>
        <br />
        <br />
        <span>Not a member?</span>
        <br />
        <Link to="/register">Register here!</Link>
        </form>
      </div>
    );
  }
}

export default Login;
