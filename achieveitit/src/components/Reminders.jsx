import React from 'react';

export default function Reminders({ reminders }) {
    const reminderList = reminders.map(reminder => <li>{reminder.reminder}</li>)
  return (
    <div>
      <h2>Reminders</h2>
      <ul>{reminderList}</ul>
    </div>
  ) 
}
