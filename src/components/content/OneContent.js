import React from "react";

function OneContent({ img, title, par }) {
  return (
    <div className="col-lg-4 col-md-6 col-xs-12 my-5">
      <div className="icon d-flex justify-content-center">
        <div className="item-image">
          <img src={img} alt="#" />
        </div>
      </div>
      <div className="item-content text-center">
        <h2>{title}</h2>
        <p>{par}</p>
      </div>
    </div>
  );
}

export default OneContent;
