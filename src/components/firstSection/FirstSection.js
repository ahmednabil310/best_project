import React, { Component } from "react";
export default class FirstSection extends Component {
  render() {
    return (
      <div className="container-fluid first-container d-flex flex-column align-items-center mt-5">
        <div className="row">
          <div className="d-flex justify-content-center">
            <h1 className="text-center">
              Landing template for <span>startups</span>
            </h1>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-center pt-3">
            <p>
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-end pt-3">
            <a href="https://cruip.com/">
              <button
                type="button"
                className="btn main-button first-btn mr-3 d-inline-flex"
              >
                Get Started
              </button>
            </a>
            <a href="https://github.com/cruip/open-react-template/">
              <button type="button" className="btn main-button second-btn ">
                View on Github
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
