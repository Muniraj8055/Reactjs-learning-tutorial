import React, { Component } from "react";

export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome",
    };
  }

  changeMessage() {
    this.setState({
      message: "hello welcome user",
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          state
        </button>
      </div>
    );
  }
}

export default Welcome;
