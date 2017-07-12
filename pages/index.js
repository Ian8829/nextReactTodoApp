import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an Awesome App', isComplete: false},
        {id: 3, name: 'Ship It!', isComplete: false}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo =>
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                </li>
              )}
            </ul>
          </div>
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
        `}
        </style>
      </div>
    );
  }
}

export default App;