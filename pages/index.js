import React, { Component } from 'react';
import {TodoForm, TodoList} from '../src/components/todos';
import {addTodo, generateId} from '../src/lib/todoHelpers';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build an Awesome App', isComplete: false},
      {id: 3, name: 'Ship It!', isComplete: false}
    ],
    currentTodo: ''
  };

  handleSubmit= (evt) => {
    evt.preventDefault();
    const newID = generateId();
    const newTodo = {id: newID, name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  };

  handleEmptySubmit= (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  };

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })

  };

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span> }
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />
          <TodoList todos={this.state.todos}/>

        </div>
        <style jsx>{`
          .Todo-App {
            padding-top: 20px;
            display: inline-block;
            text-align: left
          }

          input {
            font-size: 20px
          }

          ul {
            padding: 0px;
          }

          li {
            list-style-type: none;
          }

          .error {
            color: red;
          }
        `}
        </style>
      </div>
    );
  }
}

export default App;