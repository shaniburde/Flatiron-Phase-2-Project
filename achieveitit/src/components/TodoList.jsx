import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

export default function TodoList({tasks, addNewTask, handleDeleteTask}) {
    
    const taskList = tasks.map((taskObj) => 
    <TaskItem
      key={taskObj.id}
      taskObj={taskObj}
      addNewTask={addNewTask}
      handleDeleteTask={handleDeleteTask}
    />
    
    )
  return (
    <div className="task-list">
      <h2 className="task-header">To-do List:</h2>
       <div>{taskList}</div>
      <TaskForm addNewTask={addNewTask} />
    </div>
 );
}
