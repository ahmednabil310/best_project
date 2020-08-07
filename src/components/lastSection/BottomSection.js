import React, { Component } from "react";
import first from "../../images/features-split-image-01.png";
import second from "../../images/features-split-image-02.png";
import third from "../../images/features-split-image-03.png";
export default class BottomSection extends Component {
  render() {
    return (
      <div className="container mb-5 text-center">
        <div className="row mb-5">
          <div className="col-lg-6 justify-content-start col-xs-12 mt-5 text-center">
            <div className="weird-text pl-3 pb-2 ">lighting fast workflow</div>
            <h3 className="pl-3 pb-2">Data-driven insights</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div>
              <img
                src={first}
                alt=""
                width="528"
                height="396"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <div>
              <img
                src={second}
                alt=""
                width="528"
                height="396"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 justify-content-start col-xs-12  mt-5">
            <div className="weird-text pl-3 pb-2">lighting fast workflow</div>
            <h3 className="pl-3 pb-2">Data-driven insights</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-6 justify-content-start col-xs-12  mt-5">
            <div className="weird-text pl-3 pb-2">lighting fast workflow</div>
            <h3 className="pl-3 pb-2">Data-driven insights</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div>
              <img
                src={third}
                alt=""
                width="528"
                height="396"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
