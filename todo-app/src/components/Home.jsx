import React from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Unfinished from "./Unfinished";
import { useState, useReducer } from "react";
import TodoReducer from "../assets/TodoReducer";

const initialToDos = [
  { id: 0, mustdo: "buy a land on sea", status: false },
  { id: 1, mustdo: "Visit a bomb mine", status: false },
];

let currentId = 2;
const Home = () => {
  const [TODOS, dispatch] = useReducer(TodoReducer, initialToDos);
  const [mustdo, setMustdo] = useState("");
  const [editedID, setEditedID] = useState(0);
  const [dispBtn, setDispBtn] = useState("Add");

  const HandleAddToDo = (mustdo) => {
    dispatch({
      type: "AddedTodo",
      mustdo: mustdo,
      id: currentId++,
    });
  };

  const HandleEditTodo = (TODO) => {
    setMustdo(TODO.mustdo);
    setEditedID(TODO.id);
    setDispBtn("Update");
  };

  const HandleUpdateToDo = (mustdo) => {
    setDispBtn("Add");
    dispatch({
      type: "UpdatedTodo",
      id: editedID,
      mustdo: mustdo,
    });
  };

  const HandleToggle = (id, checkedStatus) => {
    dispatch({
      type: "Toggle",
      id: id,
      status: checkedStatus,
    });
  };

  const HandleDeleteToDo = (TodoID) => {
    dispatch({
      type: "DeletedTodo",
      id: TodoID,
    });
  };

  const HandleDeleteAll = () => {
    dispatch({
      type: "DELETE-ALL",
    });
  };
  return (
    <div className="home">
      <Header />
      <AddTodo
        HandleAddToDo={HandleAddToDo}
        mustdo={mustdo}
        changeMustdo={setMustdo}
        dispBtn={dispBtn}
        HandleUpdateToDo={HandleUpdateToDo}
      />
      <TodoList
        TODOS={TODOS}
        HandleEditTodo={HandleEditTodo}
        HandleDeleteToDo={HandleDeleteToDo}
        HandleToggle={HandleToggle}
      />
      <Unfinished TODOS={TODOS} HandleDeleteAll={HandleDeleteAll} />
    </div>
  );
};

export default Home;
