import React, { Component } from "react";
import "./Output.css";
// Creates window and displays generator output

class Output extends Component {
  render() {
    return (
      <div className="outputMain">
        <div className="outputText">
          <ul />
        </div>
        <div className="collage">
          <p className="outputHead">Output</p>
        </div>
      </div>
    );
  }
}

export default Output;
