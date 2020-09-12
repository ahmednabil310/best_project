import React from "react";
import { Link } from "react-router-dom";
function OneCard({ name }) {
  return (
    <div className="col-lg-4 col-xs-12 col-sm-6 card mx-3 my-2">
      <div className="card-body">
        <div className="card-title">
          <p>
            — Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum cillum dolore eu fugiat.
          </p>
        </div>
      </div>
      <div className="card-footer">
        <span className="item-name">{name}</span>
        <span className="text-dash"> / </span>
        <span className="item-link">
          <Link to="/">AppName</Link>
        </span>
      </div>
    </div>
  );
}

export default OneCard;
