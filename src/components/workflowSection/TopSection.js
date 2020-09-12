import React, { Component } from "react";
import ReusableSection from "../reusableSection/ReusableSection";

export default class TopSection extends Component {
  render() {
    return (
      <ReusableSection
        title="Workflow that just works"
        paragraph="Excepteur sint occaecat cupidatat non proident, sunt in culpa
               qui officia deserunt mollit anim id est laborum — semper quis
              lectus nulla at volutpat diam ut venenatis."
      />
    );
  }
}
