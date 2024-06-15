import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const onTaskFormSubmit = (newTask) => {
    setTask([...task, newTask]);
  };
  function handleDelete(taskText) {
    const updatedTasks = task.filter((task) => task.text !== taskText);
    console.log({ taskText });
    setTask(updatedTasks);
  }
  function onSelected(category) {
    setSelectedCategory(category);
  }

  const filteredTasks =
    selectedCategory === "All"
      ? task
      : task.filter((task) => task.category === selectedCategory);

  console.log({ task });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelected={onSelected} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
