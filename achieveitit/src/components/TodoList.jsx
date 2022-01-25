import React from 'react';

export default function TodoList({tasks}) {
    const taskList = tasks.map((task) => <li key={task.id}>{task.task}</li>)

  return (
    <div>
      <h2>To do List:</h2>
      <ul>{taskList}</ul>
    </div>
 );
}
