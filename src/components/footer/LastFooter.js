import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
export default class LastFooter extends Component {
  render() {
    return (
      <Fade>
        <div className="container  last-container pt-3 pb-5">
          <div className="row">
            <div className="col-md-6 last-link ">
              All right reserved to cruip
            </div>
            <div className="col-md-6">
              <div className="footer-social">
                <ul className="list-reset d-flex flex-row justify-content-end text-center ">
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
      </Fade>
    );
  }
}
