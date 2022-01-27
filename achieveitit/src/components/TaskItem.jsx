import React from 'react';

export default function TaskItem({taskObj, handleDeleteTask }) {
    const {id, task} = taskObj
    // console.log(id)

    function handleDelete(){
        fetch(`http://localhost:8000/tasks/${id}`, { 
          method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => handleDeleteTask(taskObj))
      }

  return (
  <div className='task-container'>
       <table align="center">
        <tr className="table-data">
            <td className="task-listers"  key={id}>{task} </td>
           <td className="delete-again-button-for-task">
            <button onClick={handleDelete} className="delete-task-btn">X</button>
          </td>
        </tr>
    </table>
  </div>
  );
}
