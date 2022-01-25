import React from 'react';
import EventForm from './EventForm';

export default function Events({events}) {
  const eventList = events.map((event) => <li key={event.id}>{event.event}</li>)

  return (
  <div>
      <h2>Events:</h2>
      {eventList}
      <br/> <EventForm/>
  </div>
  )
}
