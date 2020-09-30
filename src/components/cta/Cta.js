import React, { Component } from "react";
import Slide from "react-reveal/Slide";
export default class Cta extends Component {
  render() {
    return (
      <Slide right>
        <div className="container my-5 cta-container  cta-inner-container">
          <div className="row px-3">
            <div className="cta-content col-xl-6 col-xs-12">
              <h2>For previewing layouts and visual?</h2>
            </div>
            <div className="input-group mb-3 col-xl-6 col-xs-12   ">
              <input
                type="email"
                className="form-control col-xl-6 col-sm-12"
                placeholder="Your best email"
                aria-label="email"
              />

              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
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
      </Slide>
    );
  }
}
