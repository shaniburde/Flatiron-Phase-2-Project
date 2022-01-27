import React, {useState} from 'react';

export default function EventForm({ addNewEvent, days}) {
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

// console.log(newDateId[0].id)

// newDateId[0].id
// function newIdMaker(){
//   if(eventDate === date) {
//     return(id)
//   } else {
//     return null
//   }
// }

// newIdMaker(id){
// return id
// }

// const useNum = newDateId[0].id

// console.log(useNum)

    function handleChange(e) {
      setNewEvent(e.target.value)
    }

    function handleDateChange(e){
      setEventDate(e.target.value)
    }

    // var myDate = new Date('2014-04-03');
    
    // console.log(myDate.toDateString());

// const tomorrow = new Date();
// tomorrow.setTime(today.getTime() + days * 86400000);

  function handleSubmit(e){
    e.preventDefault();
    const newEventObj = {
        event: newEvent,
        date: eventDate,
        // .parseInt().setDate(eventDate.getDate() + 1).toString(),
        dateId: newDateId[0].id,
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
      <button className="form-input" type="submit">Add To Calendar</button> 
      </form>
  </div>);
}
