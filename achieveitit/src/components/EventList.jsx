import React from 'react';
import EventForm from './EventForm';
import EventItem from './EventItem';
import DateDisplay from './DateDisplay';

export default function EventList({events, addNewEvent, days, setCount, count, dateItem, forwardArrow, backArrow}) {
  const eventList = events.map((event) => 
  <EventItem 
    key={event.id}
    eventObj={event}
  />)

  return (
  <>
  <br/>
      <DateDisplay  
      setCount={setCount} 
      count={count}
      dateItem={dateItem} 
      forwardArrow={forwardArrow} 
      backArrow={backArrow}
      />
  <div className="event-list">
      <h2 className= "event-header">Today's Events</h2>
      {eventList}
      <br/> 
      <EventForm 
      setCount={setCount}
      count = {count}
      days={days}
      addNewEvent={addNewEvent}/>
  </div>
  </>
  )
}
