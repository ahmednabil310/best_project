import React from "react";
import Bounce from "react-reveal/Bounce";
function FirstSection() {
  return (
    <Bounce left>
      <div className="container-fluid first-container d-flex flex-column align-items-center mt-5">
        <div className="row">
          <div className="text-center">
            <h1>
              Landing template for <span>startups</span>
            </h1>
          </div>
        </div>
        <div>
          <div className="text-center pt-3">
            <p>
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
          </div>
        </div>
        <div>
          <div className="d-flex  pt-3">
            <a
              href="https://cruip.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn main-button first-btn mr-3 ">
                Get Started
              </button>
            </a>

            <a
              href="https://github.com/cruip/open-react-template/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn main-button second-btn ">
                View on Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </Bounce>
  );
}

export default FirstSection;
