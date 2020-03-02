import React from "react";
import routes from "./routes.js";
import { withRouter } from "react-router-dom";
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/footer";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="body">
        {props.location.pathname === "/" ||
        props.location.pathname === "/register" ? null : (
          <Header />
        )}
        {routes}
      </div>
      {props.location.pathname === "/" ||
      props.location.pathname === "/register" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default withRouter(App);
