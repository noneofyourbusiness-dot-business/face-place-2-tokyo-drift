import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Login from "./components/login-register/Login";
import Register from './components/login-register/Register';
import Nodemail from './components/devTools/Nodemail'

export default (
<Switch>
  <Route exact path = '/' component = {Login}/>
  <Route path = '/register' component = {Register}/>
  <Route path = '/home' component = {Home}/>
  {/* // DevTools \\ */}
  <Route path = '/nodemailer/test' component = {Nodemail}/>
</Switch>
);
