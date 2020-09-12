import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import ReusableSection from "../reusableSection/ReusableSection";

export default class ReviewsContent extends Component {
  render() {
    return (
      <Fade>
        <ReusableSection
          title="Customer testimonials"
          paragraph="Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                semper quis lectus nulla at volutpat diam ut venenatis tellus—in
                ornare."
        />
      </Fade>
    );
  }
}
