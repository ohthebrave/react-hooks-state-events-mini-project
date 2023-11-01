import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS)

  function handleDelete(text) {
    // console.log(id)
    const deleteItem = taskList.filter(task => task.text !== text)
    setTaskList(deleteItem)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList handleDelete={handleDelete}  tasks={taskList}/>
    </div>
  );
}

export default App;
