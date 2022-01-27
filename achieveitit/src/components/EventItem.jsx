import React from 'react';

export default function EventItem({eventObj}) {
    const {event, date} = eventObj;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateItem = new Date(date).toLocaleDateString('en-US', options);

    // const OrganizedCard = styled.div`
    // margins: 100px;
    // color: red;
    // `;

  return (
  <div className="event-container">
    <table className="event-table">
        <td>
            <tr className="event"> {event}</tr>
        </td>
        <td>
            <tr className="date">{dateItem}</tr>
        </td>
    </table>
    <br/>
  </div>
  );
}
