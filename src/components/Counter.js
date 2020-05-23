import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log("callback value", this.state.count)
    // );
    // console.log(this.state.count);
    this.setState((prevState) => ({
      count: prevState.count + 5,
    }));
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          count
        </button>
      </div>
    );
  }
}

export default Counter;
