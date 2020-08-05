import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ReviewsCards extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="row  d-flex justify-content-center">
          {/* First Card */}
          <div className="col-lg-4 col-xs-12 col-sm-6 card mx-3 my-2">
            <div className="card-body">
              <div className="card-title">
                <p>
                  — Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum cillum dolore eu fugiat.
                </p>
              </div>
            </div>
            <div className="card-footer">
              <span className="item-name">Roman Level</span>
              <span className="text-dash"> / </span>
              <span className="item-link">
                <Link to="/">AppName</Link>
              </span>
            </div>
          </div>
          {/* Second Card */}
          <div className="col-lg-4 col-xs-12 col-sm-6 card mx-3 my-2">
            <div className="card-body">
              <div className="card-title">
                <p>
                  — Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum cillum dolore eu fugiat.
                </p>
              </div>
            </div>
            <div className="card-footer">
              <span className="item-name">Diana Rynzhuk</span>
              <span className="text-dash"> / </span>
              <span className="item-link">
                <Link to="/">AppName</Link>
              </span>
            </div>
          </div>
          {/* Third Card */}
          <div className="col-lg-4 col-xs-12 col-sm-6 card mx-3 my-2">
            <div className="card-body">
              <div className="card-title  ">
                <p>
                  — Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum cillum dolore eu fugiat.
                </p>
              </div>
            </div>
            <div className="card-footer">
              <span className="item-name">Ben Stafford</span>
              <span className="text-dash"> / </span>
              <span className="item-link">
                <Link to="/">AppName</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
