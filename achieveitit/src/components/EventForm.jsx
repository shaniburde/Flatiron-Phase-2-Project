import React, {useState} from 'react';

export default function EventForm({ addNewEvent, days, setCount, count}) {
const [newEvent, setNewEvent] = useState('');
const [eventDate, setEventDate] = useState('');
// const [newDateId, setNewDateId] = useState('');

const newDateId = days.filter(({date, id}) => {
  if(eventDate === date) {
    return (id)
  } else {
    return null
  }
})

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
        date: eventDate,
        dateId: newDateId[0]?.id,
          }
          fetch("http://localhost:8000/events",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEventObj)
          })
          .then(response => response.json())
          .then((data) => addNewEvent(data))  
          setCount(newEventObj.dateId)
          setNewEvent('')
          setEventDate('')
          console.log(newEventObj.dateId)
  }


  return (
    <div>
      <form onSubmit={handleSubmit} >
      <input
        value={newEvent} 
        onChange={handleChange} 
        type="text" 
        name="name" 
        placeholder="New event..."
      />
      <br/> 
      <br/>
      <input 
        value={eventDate} 
        onChange={handleDateChange} 
        type="Date" 
        name="date"
      />
      <button className="form-input" type="submit">Create Event</button> 
      </form>
  </div>);
}
