
import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data"

function App() {


  const [displayThis, setDisplayThis] = useState([...TASKS])
  const [selectCat, setSelectCat] = useState('All')

  function onDelete(text) {
    let newArray = displayThis
    .filter((item) => item.text !== text)
    // .filter((item) => item.category === selectCat)
    console.log(newArray)
    setDisplayThis(newArray);
  }

  const tasksAvailable = displayThis.filter((task) => selectCat === "All" || task.category === selectCat)

  function classChange(cat) {
    setSelectCat(cat)
  }

  function onTaskFormSubmit(newObj) {
    setDisplayThis([...displayThis, newObj])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCat = {selectCat} classChange={classChange} onDelete={onDelete}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasksAvailable={tasksAvailable} onDelete={onDelete}/>
    </div>
  );
}

export default App;
