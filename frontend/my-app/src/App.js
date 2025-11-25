import React, { Component } from "react";
import { getTodos, addTodo, deleteTodo, updateTodo } from "./Api";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    text: ""
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = () => {
    getTodos().then((res) => {
      this.setState({ todos: res.data });
    });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAdd = () => {
    const text = this.state.text.trim();
    if (!text) return;

    addTodo(text).then(() => {
      this.setState({ text: "" });
      this.fetchTodos();
    });
  };

  handleDelete = (id) => {
    deleteTodo(id).then(() => {
      this.fetchTodos();
    });
  };

  handleToggle = (id, completed) => {
    updateTodo(id, completed).then(() => {
      this.fetchTodos();
    });
  };

  render() {
    const { todos, text } = this.state;

    return (
      <div className="todo-container">
        <h1 className="title">Todo App</h1>

        {/* INPUT BOX */}
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter todo..."
            value={text}
            onChange={this.handleChange}
            className="todo-input"
          />
          <button onClick={this.handleAdd} className="add-btn">
            Add
          </button>
        </div>

        {/* LIST */}
        <div className="todo-list">
          {todos.map((todo) => (
            <div key={todo._id} className="todo-item">
              <div className="left">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    this.handleToggle(todo._id, !todo.completed)
                  }
                />
                <span
                  className={
                    todo.completed ? "todo-text done" : "todo-text"
                  }
                >
                  {todo.text}
                </span>
              </div>

              <button
                className="delete-btn"
                onClick={() => this.handleDelete(todo._id)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
