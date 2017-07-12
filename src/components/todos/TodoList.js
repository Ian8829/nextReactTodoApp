import React from 'react';

import {TodoItem} from './TodoItem';

export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => <TodoItem handleToggle={props.handleToggle}
                                           key={todo.id} {...todo}
                                           handleRemove={props.handleRemove}

        />)}
      </ul>
      <style jsx>
        {`
        ul {
            padding: 0px;
          }
        li {
          list-style-type: none;
        }

        li span.delete-item {
          visibility: hidden;
        }

        li:hover span.delete-item {
          visibility: visible;
        }
        `}
      </style>
    </div>
  )
};

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};