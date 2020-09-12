import React from "react";
import Bounce from "react-reveal/Bounce";
function FirstSection() {
  return (
    <Bounce left>
      <div className="container-fluid header d-flex flex-column align-items-center mt-5">
        <h1 className="text-center">
          Landing template for <span>startups</span>
        </h1>
        <p className="text-center pt-3">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div>
          <div className="pt-3 d-flex">
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
