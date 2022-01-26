import React, {useState} from 'react';

export default function EventForm({ addNewEvent }) {
const [newEvent, setNewEvent] = useState('');
const [eventDate, setEventDate] = useState('');

    function handleChange(e) {
      setNewEvent(e.target.value)
    }

    function handleDateChange(e){
      setEventDate(e.target.value)
    }

  function handleSubmit(e){
    e.preventDefault();
    const newEventObj = {
        event: newEvent,
        date: eventDate
          }
          fetch("http://localhost:8000/events",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEventObj)
          })
          .then(response => response.json())
          .then((data) => addNewEvent(data))  
          setNewEvent('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
      <input
        value={newEvent} 
        onChange={handleChange} 
        type="text" 
        name="name" 
        placeholder="Event form"
      />
      <br/> 
      <br/>
      <input 
        value={eventDate} 
        onChange={handleDateChange} 
        type="Date" 
        name="date"
      />
      <button type="submit">Add To Calendar</button> 
      </form>
  </div>);
}
