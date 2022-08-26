import React from "react";

const Unfinished = ({ TODOS, HandleDeleteAll }) => {
  const numberOfUnfinishedTaks = TODOS.filter(
    (todo) => todo.status === false
  ).length;
  return (
    <div className="pending">
      <span className="unfinished">
        {" "}
        you have {numberOfUnfinishedTaks} unfinished tasks
      </span>
      <button className="clear-btn" onClick={HandleDeleteAll}>
        clear all
      </button>
    </div>
  );
};

export default Unfinished;
