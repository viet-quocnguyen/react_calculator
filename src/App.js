import React, { Component } from "react";
import math from "mathjs";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operations: []
    };
  }
  caculateOperations = () => {
    let result = this.state.operations.join("");
    result = math.eval(result);
    result = math.format(result, { precision: 4 });
    result = String(result);
    this.setState({
      operations: [result]
    });
  };
  handleClick = e => {
    const value = e.target.getAttribute("value");
    switch (value) {
      case "clear":
        this.setState({
          operations: []
        });
        break;
      case "equals":
        try {
          this.caculateOperations();
        } catch (error) {
          this.setState({
            operations: []
          });
        }

        break;
      default:
        this.setState({
          operations: [...this.state.operations, value]
        });
        break;
    }
  };
  render() {
    return (
      <div className="App">
        <div id="display">
          <p>{this.state.operations}</p>
        </div>
        <div id="buttons">
          {/* FIRST COLUMN */}
          <div onClick={this.handleClick} id="clear" value="clear">
            C
          </div>
          <div onClick={this.handleClick} id="seven" value="7">
            7
          </div>
          <div onClick={this.handleClick} id="four" value="4">
            4
          </div>
          <div onClick={this.handleClick} id="one" value="1">
            1
          </div>
          <div onClick={this.handleClick} id="zero" value="0">
            0
          </div>

          {/* SECOND COLUMN */}
          <div onClick={this.handleClick} id="divide" value="/">
            /
          </div>
          <div onClick={this.handleClick} id="eight" value="8">
            8
          </div>
          <div onClick={this.handleClick} id="five" value="5">
            5
          </div>
          <div onClick={this.handleClick} id="two" value="2">
            2
          </div>
          <div onClick={this.handleClick} id="decimal" value=".">
            .
          </div>

          {/* THIRD COLUMN */}
          <div onClick={this.handleClick} id="multiply" value="*">
            x
          </div>
          <div onClick={this.handleClick} id="nine" value="9">
            9
          </div>
          <div onClick={this.handleClick} id="six" value="6">
            6
          </div>
          <div onClick={this.handleClick} id="three" value="3">
            3
          </div>
          <div onClick={this.handleClick} id="null" value="" />

          {/* FORTH COLUMN */}
          <div onClick={this.handleClick} id="subtract" value="-">
            -
          </div>
          <div onClick={this.handleClick} id="add" value="+">
            +
          </div>
          <div onClick={this.handleClick} id="equals" value="equals">
            =
          </div>
        </div>
      </div>
    );
  }
}

export default App;
