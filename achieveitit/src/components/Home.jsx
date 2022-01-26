import React, {useEffect, useState} from 'react';

function Home({ reminders, quotes, events, exercises, tasks, count}) {
  const [dailyQuote, setDailyQuote] = useState([])
  
  console.log(count)
  
  useEffect(()=> {
    fetch(`http://localhost:8000/dates/${count}/quotes/`)
      .then(r=>r.json())
      .then(data=> setDailyQuote(data))
  }, [count])

  const firstReminder = reminders[0]
  const firstEvent = events[0]
  const firstTask = tasks[0]
  const dailyExercise = exercises[0]

  const dailyDisplay = dailyQuote.map((quote)=>{
  return quote.quote
  }
  )

  return (
    <div>
      <h2> Home Preview of everything</h2>
      <p>Daily Quote: {dailyDisplay}</p>
      <p>Reminders: {firstReminder?.reminder}</p>
      <p>Tasks: {firstTask?.task} </p>
      <p>Events: {firstEvent?.event}</p>
      <p>Exercise: {dailyExercise?.exercise} </p> 
    </div>
  )

}

export default Home;