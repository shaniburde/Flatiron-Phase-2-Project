import React from 'react';

export default function EventItem({eventObj}) {
    const {event, date} = eventObj;

    let eventSplit = date.split('-')
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateItem = new Date(eventSplit).toLocaleDateString('en-US', options);


  return (
  <div className="event-container">
    <table className="event-table">
        <td className="event-item">
            <tr className="event"> {event}</tr>
        </td>
        {/* <td className="invisible">
            <tr className="date">{dateItem}</tr>
        </td> */}
    </table>
    <br/>
  </div>
  );
}
