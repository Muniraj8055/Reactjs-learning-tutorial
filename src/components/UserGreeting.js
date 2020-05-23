import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {

    return()
    // return this.state.isLogin ? (
    //   <div>this is true</div>
    // ) : (
    //   <div>this is false</div>
    // );
    // let message;
    // if (this.state.isLogin) {
    //   message = <div>this is true</div>;
    // } else {
    //   message = <div>false</div>;
    // }

    // return <div>{message}</div>;
    // if (this.state.isLogin) {
    //   return <div>this is true</div>;
    // } else {
    //   return <div>this is false</div>;
    // }
  }
}

export default UserGreeting;
