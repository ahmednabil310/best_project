import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-light nav-container align-items-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mb-2 mt-2">
                <Link to="/" className="doc">
                  Documentation
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup">
                  <button
                    aria-label="signup"
                    type="button"
                    className="btn nav-button"
                  >
                    SignUp
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
