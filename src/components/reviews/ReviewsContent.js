import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class ReviewsContent extends Component {
  render() {
    return (
      <Fade>
        <div className="container-fluid first-container d-flex flex-column align-items-center my-5 text-center">
          <div className="row">
            <div className="col-12 d-flex ">
              <h1>Customer testimonials</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex  pt-3">
              <p>
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                semper quis lectus nulla at volutpat diam ut venenatis tellus—in
                ornare.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
