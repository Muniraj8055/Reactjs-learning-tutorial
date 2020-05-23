import React, { Component } from "react";

class ClassClick extends Component {
  event() {
    console.log("clicked me");
  }

  render() {
    return (
      <div>
        <button onClick={this.event}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
