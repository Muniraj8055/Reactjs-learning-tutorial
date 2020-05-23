import React, { Component } from "react";
import autobind from "react-autobind";

export class EventBind extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      message: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this); binding in constructer
  }

  // clickHandler() {
  //   this.setState({
  //     message: "google",
  //   });
  //   console.log("clicked");
  // }
  clickHandler() {
    this.setState({
      message: "goodbye",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  // binding in render*/}
        {/* <button onClick={() => this.clickHandler()}>Click</button> // binding in arrow function*/}
        {/* <button onClick={this.clickHandler}>Click</button>  // binding in constructer it is best now */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
