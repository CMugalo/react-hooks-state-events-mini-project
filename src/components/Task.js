import React from "react";

function Task({ task, category, onDelete }) {
  function handleClick() {
    console.log(task);
    onDelete(task);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;
