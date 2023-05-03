import React, { useReducer, useState } from "react";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.params];
    case "REMOVE_TODO":
      return state.filter((todo, i) => i != action.index);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Todo</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          text && dispatch({ type: "ADD_TODO", params: text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>

      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              {todo}
              <button
                onClick={() => dispatch({ type: "REMOVE_TODO", index: i })}
              >
                Remove todo
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

// =======================================================
// Question #2 - React - Solve the Problem
// =======================================================

// Complete the following <TodoList> component to display todos and allow for adding and removing of todo items

// const todosReducer = (state, action) => {
//  switch (action.type) {
//    case 'ADD_TODO':
//    case 'REMOVE_TODO':
//  }

// };

// const TodoList = () => {

//  const [todos, dispatch] = useReducer(todosReducer, []);

//  return (
//    <div>
//      <ul>
//        {todos.map((todo) => (
//          <li><button>Remove todo</button></li>
//        ))}
//      </ul>
//      <button>Add todo</button>
//    </div>
//  );
// };
