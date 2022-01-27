import React from 'react';

export default function ReminderItem({ reminderObj }) {
    const {reminder, date} = reminderObj;

    const dateSplit = date.split('-');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateItem = new Date(dateSplit).toLocaleDateString('en-US', options);

  return (
  <div className="reminder-container">
        <tr className="reminder-rows">
            <td className="reminder-left">{reminder}</td>
            <td className="reminder-right">{dateItem}</td>
        </tr>
  </div>
  )
}
