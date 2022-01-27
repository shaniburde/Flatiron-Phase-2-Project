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
      <h2 className="reminder-header">Reminders</h2><br/>
      <table className="reminder-item-list">
        <div className="due-dates">
          {/* <tr>
            <th className="header-reminder">Need to complete by this day:</th>
            <th className="header-reminder"></th>
          </tr> */}
        </div>
        {reminderList}
      </table>
      <br/>
      <ReminderForm addNewReminder={addNewReminder}/>
    </div>
  ) 
}
