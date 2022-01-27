import React, {useState, useEffect} from 'react';

export default function TaskForm({addNewTask}) {
  const [newTask, setNewTask] = useState('')

  function handleChange(e){
    setNewTask(e.target.value)
  }
    
    function handleSubmit(e) {
        e.preventDefault();
        const newTaskObj = {
           task: newTask
        }
        fetch("http://localhost:8000/tasks",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTaskObj)
        })
        .then(response => response.json())
        .then((data) => addNewTask(data))  
        setNewTask('')
        }
    

    
  return (
  <div>
      <br/>
      <form onSubmit={handleSubmit}>
          <label htmlFor="new-task-name"></label>
          <input  
            placeholder="New task..." name="new-task-name" 
            type="text" value={newTask} 
            onChange={handleChange}>
        </input>
          <button className="form-input" type="submit">Add to List</button> 
      </form>
  </div>
  );
}
