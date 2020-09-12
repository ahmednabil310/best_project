import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import OneCard from "./OneCard";
export default class ReviewsCards extends Component {
  render() {
    return (
      <Slide left>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <OneCard name="Roman Level" />

            <OneCard name="Diana Rynzhuk" />

            <OneCard name="Ben Stafford" />
          </div>
        </div>
      </Slide>
    );
  }
}
