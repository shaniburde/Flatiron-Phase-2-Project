import React from 'react';
import ReminderForm from './ReminderForm';

export default function Reminders({ reminders }) {
    const reminderList = reminders.map(reminder => <li key={reminder.id}>{reminder.reminder}</li>)
  return (
    <div>
      <h2>Reminders</h2>
      {reminderList}
      <br/><ReminderForm/>
    </div>
  ) 
}
