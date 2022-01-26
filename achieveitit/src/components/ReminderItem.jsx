import React from 'react';

export default function ReminderItem({ reminderObj }) {
    const {reminder, date} = reminderObj;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateItem = new Date(date).toLocaleDateString('en-US', options);

  return (
  <div>
      <table>
        <tr>
            <td>{reminder}</td>
            <td>{dateItem}</td>
        </tr>
    </table>

  </div>
  )
}
