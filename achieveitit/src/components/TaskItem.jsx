import React from 'react';

export default function TaskItem({taskObj, handleDeleteTask }) {
    const {id, task} = taskObj
    console.log(id)

    function handleDelete(){
        fetch(`http://localhost:8000/tasks/${id}`, { 
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => handleDeleteTask(taskObj))
      }

  return (
  <div>
       <table>
        <tr>
            <td key={id}>{task} 
            <button onClick={handleDelete} className="delete-task-btn">X</button></td>
        </tr>
        <br/>
    </table>
  </div>
  );
}
