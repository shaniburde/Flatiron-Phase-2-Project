import React, {useEffect, useState} from 'react';
import DateDisplay from './DateDisplay';


function Home({ reminders, quotes, events, exercises, tasks, count, dateItem, setCount, forwardArrow, backArrow}) {
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
  const dailyAgenda = ` D A I L Y  A G E N D A `;

  const currentDate = new Date()
  
  // function getTodaysDate(date){
  //   if(currentDate === )
  // }
  console.log(dateItem)
  
  return (
    <>
    <DateDisplay  
      setCount={setCount} 
      count={count}
      dateItem={dateItem} 
      forwardArrow={forwardArrow} 
      backArrow={backArrow}
      />
    <div className="daily-agenda">
      <h1 className="agenda-header"><pre>{dailyAgenda}</pre></h1> 
       <br/>
      <div className="quote-card">
      <h4 className="quote-text">Quote of the Day</h4> 
        <p className="daily-quote">" {dailyDisplay} "</p>
      </div>
      <br/>
      <div className="reminder-card">
        <h4>Reminders</h4> 
        <p>{firstReminder?.reminder}</p>
      </div>
      <div className="task-card">
        <h4>Tasks</h4>
        <p>{firstTask?.task} </p>
      </div>
      <div className="event-card">
        <h4>Events</h4>
        <p>{firstEvent ? firstEvent?.event : "Nothing on your schedule"}</p>
        
      </div>
      <div className="exercise-card">
      <h4>Today's Workout</h4>
        <p>{dailyExercise?.exercise} </p> 
      </div>
    </div>
    </>
  )

}

export default Home;