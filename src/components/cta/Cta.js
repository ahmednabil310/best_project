import React, { Component } from "react";

export default class Cta extends Component {
  render() {
    return (
      <div className="container my-5 cta-container">
        <div className="cta-inner-container">
          <div className="row">
            <div className="cta-content col-lg-6">
              <h3>For previewing layouts and visual?</h3>
            </div>
            <div className="input-group mb-3 col-lg-6  d-flex justify-content-end">
              <input
                type="email"
                className="form-control col-lg-6"
                placeholder="Your best email"
              />
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <svg
                    width="16"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                      fill="#376DF9"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
