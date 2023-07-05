
import React from "react";
import Task from "./Task";

function TaskList({tasksAvailable, onDelete}) {

  return (
    <div className="tasks">
      {tasksAvailable.map((item) => (
        <Task key = {item.text} text = {item.text} category={item.category} onDelete={onDelete}/>
      ))}
    </div>
  );
}

export default TaskList;