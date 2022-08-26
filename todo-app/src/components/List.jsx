const List = ({ TODO, HandleEditTodo, HandleDeleteToDo, HandleToggle }) => {
  return (
    <li key={TODO.id} className="list">
      <div className="left">
        <span className="check">
          <input
            type="checkbox"
            checked={TODO.status}
            onChange={(e) => HandleToggle(TODO.id, e.target.checked)}
          />
        </span>
        <span
          style={{ textDecoration: TODO.status ? "line-through" : "none" }}
          className="mustdo"
        >
          {TODO.mustdo}
        </span>
      </div>

      <div className="right">
        <div className="edit">
          <span
            class="material-symbols-outlined"
            onClick={() => {
              HandleEditTodo(TODO);
            }}
          >
            edit_note
          </span>
        </div>
        <div className="delete">
          <span
            class="material-symbols-outlined"
            onClick={() => {
              HandleDeleteToDo(TODO.id);
            }}
          >
            delete
          </span>
        </div>
      </div>
    </li>
  );
};
export default List;
