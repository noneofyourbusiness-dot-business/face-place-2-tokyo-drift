import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login-register/login/Login";
import Register from "./components/login-register/register/Register";
import Nodemail from "./components/devTools/nodemailer/Nodemail";
import NodemailerAccept from "./components/devTools/nodemailer/NodemailerAccept";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/home" component={Home} />
    {/* // DevTools \\ */}
    <Route path="/nodemailer/test" component={Nodemail} />
    <Route path="/nodemailer/accept" component={NodemailerAccept} />
  </Switch>
);
