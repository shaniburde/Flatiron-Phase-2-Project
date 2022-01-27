import React, { useState, useEffect } from 'react';
import Home from './Home';
import Quotes from "./Quotes";
import TodoList from "./TodoList";
import ReminderList from "./RemindersList";
import EventList from "./EventList";
import Exercises from "./Exercises";
import { Route, Switch } from 'react-router-dom';


function MainContainer({ setCount, count, days }) {
  const [tasks, setTasks] = useState([])
  const [quotes, setQuotes] = useState([])
  const [reminders, setReminders] = useState([])
  const [events, setEvents] = useState([])
  const [exercises, setExercises] = useState([])

// console.log(count)

  useEffect(() => {
    fetch(`http://localhost:8000/tasks`)
      .then(r => r.json())
      .then(data => setTasks(data))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/quotes`)
      .then(r => r.json())
      .then(data => setQuotes(data))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/reminders`)
      .then(r => r.json())
      .then(data => setReminders(data))
  }, [])

  useEffect(()=> {
    fetch(`http://localhost:8000/dates/${count}/events/`)
      .then(r=>r.json())
      .then(data=>setEvents(data))
  }, [count])

  useEffect(()=> {
    fetch(`http://localhost:8000/dates/${count}/exercises/`)
      .then(r=>r.json())
      .then(data=> setExercises(data))
  }, [count])

  function addNewTask(newTask) {
    setTasks((prevState) => [...prevState, newTask])
  }

  function addNewReminder(newReminder){
    setReminders((prevState) => [...prevState, newReminder])
  }

  function addNewEvent(newEvent){
    setEvents((prevState) => [...prevState, newEvent])
  }

  function handleDeleteTask(taskToDelete){
    const updatedTasks = tasks.filter((task) => {
      if (task.id !== taskToDelete.id) {
        return task
      } else {
        return null
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <div>
      <Switch>

        <Route path='/quotes'>
          <Quotes quotes={quotes} />
        </Route>

        <Route path='/reminders'>
          <ReminderList
            reminders={reminders}
            addNewReminder={addNewReminder}
          /> 
        </Route>

        <Route path='/events'>
          <EventList 
          setCount={setCount}
          count = {count}
          addNewEvent={addNewEvent}
          events={events}
          days={days}
          /> 
        </Route>

        <Route path="/todolist">
          <TodoList
            addNewTask={addNewTask}
            tasks={tasks}
            handleDeleteTask={handleDeleteTask} />
        </Route>

        <Route path="/exercises">
          <Exercises exercises={exercises} />
        </Route>

        <Route path="/">
          <Home 
          count = {count}
          quotes={quotes}
          reminders={reminders}
          events={events}
          tasks={tasks}
          exercises={exercises}
           />
        </Route>

      </Switch>
    </div>
  )
};

export default MainContainer;