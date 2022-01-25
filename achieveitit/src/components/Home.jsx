import React from 'react';

function Home({ reminders, quotes, events, exercises, tasks}) {
  
  const firstReminder = reminders[0]
  const dailyQuote = quotes[0]
  const firstEvent = events[0]
  const firstTask = tasks[0]
  const dailyExercise = exercises[0]

  return (
    <div>
      <h2> Home Preview of everything</h2>
      <h4>Quote: {dailyQuote?.quote}</h4>
      <p>Reminders: {firstReminder?.reminder}</p>
      <p>Tasks: {firstTask?.task} </p>
      <p>Events: {firstEvent?.event}</p>
      <p>Exercise: {dailyExercise?.exercise} </p> 
    </div>
  )

}

export default Home;

 {/* date
      main
            quotes
            event
            reminders
            to dos
            exercises  */}