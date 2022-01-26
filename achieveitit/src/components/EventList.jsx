import React from 'react';
import EventForm from './EventForm';
import EventItem from './EventItem';

export default function EventList({events, addNewEvent}) {
  const eventList = events.map((event) => 
  <EventItem 
    key={event.id}
    eventObj={event}
  />)

  return (
  <div>
      <h2>Events:</h2>
      {eventList}
      <br/> 
      <EventForm addNewEvent={addNewEvent}/>
  </div>
  )
}
