import React, { Component } from "react";
export default class Video extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col d-flex justify-content-center pt-5">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="song"
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
