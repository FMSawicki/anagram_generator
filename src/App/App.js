import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Output from "./Output/Output";
import Input from "./Input/Input";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", inputTemp: "", apiResponse: [] };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput = () => {
    var result;
    var index = "";
    this.setState({ inputText: this.state.inputTemp });
    var cors_api_url = "https://cors-anywhere.herokuapp.com/";
    var anagramica_api_url = `http://www.anagramica.com/best/:${
      this.state.inputTemp
    }`;

    //assigns cors-anywhere url and api url to variables to fix cors error
    fetch(cors_api_url + anagramica_api_url)
      .then(response => response.json())
      .then(myJson => (result = myJson.best))
      //stores array recieved from api in variable
      .then(result => {
        index = result.indexOf(`${this.state.inputTemp}`);
        result.splice(index, 1);
        //since the recieved array includes the word sent in the fetch request, this finds the index of that word in the array and removes it. I used splice to avoid leaving a hole in the array.
        this.setState({ apiResponse: result });
      })
      .catch(error => console.error(error));
  };
  onChange = e => {
    console.log("change");
    this.setState({ inputTemp: e.target.value });
  };
  //sets state of inputTemp by the keystroke
  render() {
    return (
      <div className="App">
        <Input
          onChange={this.onChange}
          handleInput={this.handleInput}
          input={this.state.input}
        />
      </div>
    );
  }
}

export default App;
