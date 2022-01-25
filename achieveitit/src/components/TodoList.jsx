import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

export default function TodoList({tasks, addNewTask, handleDeleteTask}) {
    // const taskObjects = tasks.map((task) => task)
    // console.log(taskObjects.id)
   
    // console.log(task)
    // console.log(id)

    // function handleDelete(){
    //     fetch(`http://localhost:8000/tasks/${taskObjects.id}`, { 
    //       method: 'DELETE',
    //     })
    //     .then((r) => r.json())
    //     .then(() => handleDeleteTask(task))
    //   }
    

    const taskList = tasks.map((taskObj) => 
    <TaskItem
      key={taskObj.id}
      taskObj={taskObj}
      addNewTask={addNewTask}
      handleDeleteTask={handleDeleteTask}
    />
    // <table>
    //     <tr>
    //         <td key={task.id}>{task.task} 
    //         <button onClick={handleDelete} className="delete-task-btn">X</button></td>
    //     </tr>
    //     <br/>
    // </table>
    )
  return (
    <div>
      <h2>To do List:</h2>
       <div>{taskList}</div>
      <TaskForm addNewTask={addNewTask} />
    </div>
 );
}
