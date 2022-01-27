import React from 'react';
import EventForm from './EventForm';
import EventItem from './EventItem';

export default function EventList({events, addNewEvent, days, setCount, count}) {
  const eventList = events.map((event) => 
  <EventItem 
    key={event.id}
    eventObj={event}
  />)

  return (
  <div className="event-list">
      <h2 className= "event-header">Date & Events:</h2>
      {eventList}
      <br/> 
      <EventForm 
      setCount={setCount}
      count = {count}
      days={days}
      addNewEvent={addNewEvent}/>
  </div>
  )
}
