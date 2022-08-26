import React from "react";
import List from "./List";

const TodoList = ({
  TODOS,
  HandleEditTodo,
  HandleDeleteToDo,
  HandleToggle,
}) => {
  return (
    <div className="todoList">
      <ul>
        {TODOS.map((TODO) => (
          <List
            TODO={TODO}
            HandleEditTodo={HandleEditTodo}
            HandleDeleteToDo={HandleDeleteToDo}
            HandleToggle={HandleToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
