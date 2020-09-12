import React from "react";
import icon1 from "../../images/feature-tile-icon-01.svg";
import icon2 from "../../images/feature-tile-icon-02.svg";
import icon3 from "../../images/feature-tile-icon-03.svg";
import icon4 from "../../images/feature-tile-icon-04.svg";
import icon5 from "../../images/feature-tile-icon-05.svg";
import icon6 from "../../images/feature-tile-icon-06.svg";
import Fade from "react-reveal/Fade";
import OneContent from "./OneContent";

function Content() {
  return (
    <Fade>
      <div className="container content-section" id="main">
        <div className="row justify-content-center">
          <OneContent
            title="Robust Workflow"
            par=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat."
            img={icon1}
          />
          <OneContent
            title="Robust Workflow"
            par=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat."
            img={icon2}
          />
          <OneContent
            title="Robust Workflow"
            par=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat."
            img={icon3}
          />
          <OneContent
            title="Robust Workflow"
            par=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat."
            img={icon4}
          />
          <OneContent
            title="Robust Workflow"
            par=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat."
            img={icon5}
          />
          <OneContent
            title="Robust Workflow"
            par=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat."
            img={icon6}
          />
        </div>
      </div>
    </Fade>
  );
}

export default Content;
