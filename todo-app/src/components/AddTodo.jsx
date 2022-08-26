import React from "react";
import { useCallback } from "react";

const AddTodo = ({
  HandleAddToDo,
  mustdo,
  changeMustdo,
  dispBtn,
  HandleUpdateToDo,
}) => {
  const handleChangeMustdo = useCallback(
    (e) => {
      changeMustdo(e.target.value);
    },
    [changeMustdo]
  );

  return (
    <div className="add-user">
      <h4>Add Your Todo</h4>
      <div className="input-container">
        <input type="text" value={mustdo} onChange={handleChangeMustdo} />
        <button
          className="add-btn"
          onClick={() => {
            if (dispBtn === "Add") {
              HandleAddToDo(mustdo);
              changeMustdo("");
            } else if (dispBtn === "Update") {
              HandleUpdateToDo(mustdo);
              changeMustdo("");
            }
          }}
        >
          {dispBtn}
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
