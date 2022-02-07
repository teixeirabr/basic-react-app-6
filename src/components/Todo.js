import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return <h3>{this.props.task}</h3>;
  }
}
