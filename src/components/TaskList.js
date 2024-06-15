import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  if (!tasks) {
    return <div>No tasks available</div>;
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task.text}
          category={task.category}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
