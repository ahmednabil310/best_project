import React, { Component } from "react";

export default class TopSection extends Component {
  render() {
    return (
      <div className="container-fluid first-container d-flex flex-column align-items-center my-5 text-center">
        <div className="row">
          <div className="col-12 ">
            <h1>Workflow that just works</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12  pt-3">
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
