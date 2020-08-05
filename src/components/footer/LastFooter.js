import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LastFooter extends Component {
  render() {
    return (
      <div className="container  last-container pt-3 pb-5">
        <div className="row">
          <div className="col-md-6 last-link">
            Made by <a href="https://cruip.com">Cruip</a>. All right reserved
          </div>
          <div className="col-md-6 ">
            <div className="footer-social">
              <ul className="list-reset d-flex flex-row justify-content-end">
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">FAQ's</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
