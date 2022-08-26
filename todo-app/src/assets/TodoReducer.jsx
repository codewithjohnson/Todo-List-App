const TodoReducer = (TODOS, action) => {
  switch (action.type) {
    case "AddedTodo": {
      if (action.mustdo !== "") {
        return [
          ...TODOS,
          {
            id: action.id,
            mustdo: action.mustdo,
            status: false,
          },
        ];
      } else {
        return [...TODOS];
      }
    }
    case "UpdatedTodo": {
      return TODOS.map((todo) => {
        if (todo.id === action.id && todo.mustdo !== action.mustdo) {
          return { ...todo, mustdo: action.mustdo };
        }
        return todo;
      });
    }
    case "DeletedTodo": {
      return TODOS.filter((todo) => todo.id !== action.id);
    }
    case "Toggle": {
      return TODOS.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, status: action.status };
        }
        return todo;
      });
    }
    case "DELETE-ALL": {
      return TODOS.filter((todo) => {
        todo.id === TODOS.length;
      });
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export default TodoReducer;
