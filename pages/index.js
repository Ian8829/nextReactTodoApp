import React, { Component } from 'react';

class App extends Component {
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
              <li><input type="checkbox"/> Learn JSX</li>
              <li><input type="checkbox"/> Build an Awesome App</li>
              <li><input type="checkbox"/> Ship It!</li>
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