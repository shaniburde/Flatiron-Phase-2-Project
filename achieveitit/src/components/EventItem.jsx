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
  <>
    <table>
        <tbody>
            <tr className="event"> {event}</tr>
            </tbody>     
     </table>
    <table>
        <tbody>
            <tr className="date">{dateItem}</tr>
        </tbody>
    </table>
    <br/>
  </>
  );
}
