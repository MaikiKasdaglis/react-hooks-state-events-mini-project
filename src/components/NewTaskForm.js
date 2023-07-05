import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {

const [newObj, setNewObj] = useState({
    key: uuid,
    text: '',
    category: ''
})

function createNew(e) {
 const name = e.target.name
 const value = e.target.value
 setNewObj({
  ...newObj,
  [name]: value
 })

}
  
  return (
    <form className="new-task-form" onSubmit={e => {
      e.preventDefault()
      onTaskFormSubmit(newObj)

      }}>
      <label>
        Details
        <input type="text" name="text" onChange={createNew}/>
      </label>
      <label>
        Category
        <select name="category" onChange={createNew}>
          {/* render <option> elements for each category here */}
          {categories.map((item) => item ==="All" ? null : <option key={item}>{item}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
