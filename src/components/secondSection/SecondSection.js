import React, { Component } from "react";

export default class SecondSection extends Component {
  render() {
    return (
      <div className="container-fluid first-container d-flex flex-column align-items-center mt-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <h1 className="text-center">Build up the whole picture</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center pt-3">
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum — semper quis lectus
              nulla at volutpat diam ut venenatis.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
