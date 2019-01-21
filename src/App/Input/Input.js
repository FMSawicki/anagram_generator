import React, { Component } from "react";
import "./Input.css";
import logo from "../logo.png";

class input extends Component {
  render() {
    return (
      <div className="inputMain">
        <div className="inputDiv">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Enter a word to get an anagram!</p>
          <form>
            <textarea
              id="inputText"
              onChange={this.props.onChange}
              type="text"
              cols="30"
              rows="3"
            />
            <input
              id="inputSubmit"
              type="button"
              value="Submit"
              onClick={this.props.handleInput}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default input;
