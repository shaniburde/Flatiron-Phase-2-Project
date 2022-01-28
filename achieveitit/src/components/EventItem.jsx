import React from 'react';

export default function EventItem({eventObj}) {
    const {event, date} = eventObj;

    let eventSplit = date.split('-')
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateItem = new Date(eventSplit).toLocaleDateString('en-US', options);


  return (
  <>
   <p className="event"> {event}</p>
  </>
  );
}
