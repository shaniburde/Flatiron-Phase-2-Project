import React from 'react';
import EventForm from './EventForm';
import EventItem from './EventItem';

export default function EventList({events, addNewEvent, days}) {
  const eventList = events.map((event) => 
  <EventItem 
    key={event.id}
    eventObj={event}
  />)

  return (
  <div className="event-list">
      <h2>Events:</h2>
      {eventList}
      <br/> 
      <EventForm 
      days={days}
      addNewEvent={addNewEvent}/>
  </div>
  )
}
