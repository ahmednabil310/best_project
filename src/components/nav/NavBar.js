import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav class="navbar justify-content-between nav-container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <form class="form-inline">
            <Link to="/">
              <p className="d-inline ml-3">Documentation</p>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn main-button">
                SignUp
              </button>
            </Link>
          </form>
        </nav>
      </div>
    );
  }
}
