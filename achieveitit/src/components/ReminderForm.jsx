import React, {useState} from 'react';

export default function ReminderForm({ addNewReminder }) {
  const [newReminder, setNewReminder] = useState('');
  const [reminderDate, setReminderDate] = useState('');

  function handleChange(e) {
    setNewReminder(e.target.value)
  }

  function handleDateChange(e) {
    setReminderDate(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newReminderObj = {
       reminder: newReminder,
       date: reminderDate
    }
    fetch("http://localhost:8000/reminders",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReminderObj)
    })
    .then(response => response.json())
    .then((data) => addNewReminder(data))  
      setNewReminder('')
    }

  return  (
    <div >
      <form onSubmit={handleSubmit} >
      <input 
        value={newReminder} 
        onChange={handleChange} 
        type="text" 
        name="name" 
        placeholder="Please Remind Me..."
      />
      <br/> 
      <br/>
      <input 
        value={reminderDate} 
        onChange={handleDateChange} 
        type="Date" 
        name="date"
      />
      <button className="form-input" type="submit">Remind me</button> 
      </form>
  </div>);
}
