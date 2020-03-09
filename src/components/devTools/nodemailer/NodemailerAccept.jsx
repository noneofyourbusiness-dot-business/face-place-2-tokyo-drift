import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import "./NodemailerAccept.css";

class NodemailerAccept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user_id: 0
    };
  }

  confirm = () => {
    const {email, password, user_id} = this.state
    console.log('confirm hit');
    
    axios.get("/api/pre-check", email).then(res => {
      const user_id = res.data[0].user_id;
      console.log(res.data[0], 'hit');
      this.setState({
        user_id: user_id
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
      this.confirm();
    }
  };

  render() {
    return (
      <div className="login-nm">
        <form className="login-form-nm">
          <h1 className="loginTitle-nm">Welcome to Face Place.</h1>
          <p className="loginText-nm">Email</p>
          <input
            type="text"
            placeholder="Email"
            onChange={e => this.handleChange("email", e.target.value)}
            value={this.state.email}
          />
          <p className="loginText-nm">Password</p>
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.handleChange("password", e.target.value)}
            value={this.state.password}
            onKeyPress={this.handleKeyPress}
          />
          <br />
          <br />
          <button onClick={() => this.confirm()} className="loginButton-nm">
            Confirm E-mail and Login
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

export default NodemailerAccept;
