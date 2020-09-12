import React from "react";
import Fade from "react-reveal/Fade";
function ReusableSection({ title, paragraph }) {
  return (
    <Fade>
      <div className="container-fluid first-container d-flex flex-column align-items-center my-5 text-center">
        <div className="row">
          <div className="col-12 ">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12  pt-3">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ReusableSection;
