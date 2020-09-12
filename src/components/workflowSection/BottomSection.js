import React, { Component } from "react";
import first from "../../images/features-split-image-01.png";
import second from "../../images/features-split-image-02.png";
import third from "../../images/features-split-image-03.png";
import Fade from "react-reveal/Slide";
import Slide from "react-reveal/Slide";
export default class BottomSection extends Component {
  render() {
    return (
      <Fade>
        <div className="container mb-5 text-center">
          <Slide left>
            <div className="row mb-5">
              <div className="col-lg-6 justify-content-start col-xs-12 mt-5 text-center">
                <span className="weird-text pl-3 pb-2 ">
                  lighting fast workflow
                </span>
                <h2 className="pl-3 pb-2">Data-driven insights</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
          </Slide>
          <Slide right>
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
                <span className="weird-text pl-3 pb-2">
                  lighting fast workflow
                </span>
                <h2 className="pl-3 pb-2">Data-driven insights</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="row pt-5">
              <div className="col-lg-6 justify-content-start col-xs-12  mt-5">
                <span className="weird-text pl-3 pb-2">
                  lighting fast workflow
                </span>
                <h2 className="pl-3 pb-2">Data-driven insights</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
          </Slide>
        </div>
      </Fade>
    );
  }
}
