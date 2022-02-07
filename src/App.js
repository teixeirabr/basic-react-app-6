import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";

class App extends Component {
  state = {
    list: [],
    input: "",
  };

  //handlers

  handleInputChange = (input) => {
    this.setState({ input: input });
  };

  handleAddTask = () =>
    this.setState({
      list: [...this.state.list, this.state.input],
      input: "",
    });

  // Render below

  render() {
    let list = this.state.list.map((e, i) => {
      return <Todo key={i} task={e} />;
    });

    return (
      <div className="App">
        <h1>My to-do list</h1>
        <input
          placeholder={"Enter task here"}
          value={this.state.input}
          onChange={(e) => this.handleInputChange(e.target.value)}
        />
        <button onClick={this.handleAddTask}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
