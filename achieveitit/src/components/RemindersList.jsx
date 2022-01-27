import React from 'react';
import ReminderItem from './ReminderItem';
import ReminderForm from './ReminderForm';

export default function ReminderList({ reminders, addNewReminder }) {
    const reminderList = reminders.map(reminder => 
    <ReminderItem 
      key={reminder.id} 
      reminderObj={reminder}
    />
    )
  return (
    <div className="reminder-list">
      <h2 className="task-header">Reminders</h2>
      {reminderList}
      <br/>
      <ReminderForm addNewReminder={addNewReminder}/>
    </div>
  ) 
}
