import React from 'react';

export default function ReminderForm() {
  return  <div>
      <form>
      <input type="text" name="name" placeholder="Please Remind Me"/>
      <br/> 
      <br/>
      <input type="Date" name="date"/>
      <button type="submit">Remind me</button> 
      </form>
  </div>;
}
