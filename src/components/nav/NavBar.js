import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import img from "../../images/illustration-section-01.svg";
export default class NavBar extends Component {
  render() {
    return (
      <div className="container nav-container">
        <nav className="navbar navbar-expand-lg pt-3 navbar-light">
          <div className="mr-auto">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar-default  d-flex justify-content-end"
            id="navbarCollapse"
          >
            <p className="d-inline ml-3">Documentation</p>
            <Link to="/signup">
              <button type="button" className="btn main-button">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
