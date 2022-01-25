import React from 'react';

export default function EventForm() {
  return <div>
      <form>
      <input type="text" name="name" placeholder="Event form"/>
      <button type="submit">Add To Calendar</button> 
      <br/> 
      <br/>
      <input type="Date" name="date"/>
      </form>
  </div>;
}
