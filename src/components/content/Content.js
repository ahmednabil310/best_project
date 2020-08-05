import React, { Component } from "react";
import icon1 from "../../images/feature-tile-icon-01.svg";
import icon2 from "../../images/feature-tile-icon-02.svg";
import icon3 from "../../images/feature-tile-icon-03.svg";
import icon4 from "../../images/feature-tile-icon-04.svg";
import icon5 from "../../images/feature-tile-icon-05.svg";
import icon6 from "../../images/feature-tile-icon-06.svg";
export default class Content extends Component {
  render() {
    return (
      <div className="container content-section">
        <div className="row justify-content-center">
          <div className="col-md-6 col-xs-12 col-lg-4 my-5">
            <div className="icon d-flex justify-content-center">
              <div className="item-image">
                <img src={icon1} alt="#" />
              </div>
            </div>
            <div className="item-content d-flex flex-column align-items-center">
              <h4>Robust Workflow</h4>
              <p className="text-sm text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-lg-4 my-5">
            <div className="icon d-flex justify-content-center">
              <div className="item-image">
                <img src={icon2} alt="#" />
              </div>
            </div>
            <div className="item-content d-flex flex-column align-items-center">
              <h4>Robust Workflow</h4>
              <p className="text-sm text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-lg-4 my-5">
            <div className="icon  d-flex justify-content-center">
              <div className="item-image">
                <img src={icon3} alt="#" />
              </div>
            </div>
            <div className="item-content d-flex flex-column align-items-center">
              <h4>Robust Workflow</h4>
              <p className="text-sm text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-xs-12 col-lg-4 my-5">
            <div className="icon d-flex justify-content-center">
              <div className="item-image">
                <img src={icon4} alt="#" />
              </div>
            </div>
            <div className="item-content d-flex flex-column align-items-center">
              <h4>Robust Workflow</h4>
              <p className="text-sm text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-lg-4 my-5">
            <div className="icon d-flex justify-content-center">
              <div className="item-image">
                <img src={icon5} alt="#" />
              </div>
            </div>
            <div className="item-content d-flex flex-column align-items-center">
              <h4>Robust Workflow</h4>
              <p className="text-sm text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-lg-4 my-5">
            <div className="icon  d-flex justify-content-center">
              <div className="item-image">
                <img src={icon6} alt="#" />
              </div>
            </div>
            <div className="item-content d-flex flex-column align-items-center">
              <h4>Robust Workflow</h4>
              <p className="text-sm text-center">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
