import React, {useState, useEffect} from 'react';
import Home from './Home';
import Quotes from "./Quotes";
import TodoList from "./TodoList";
import Reminders from "./Reminders";
import Events from "./Events";
import Exercises from "./Exercises";
import { Route, Switch } from 'react-router';


function MainContainer() {
  const [tasks, setTasks] = useState([])
  const [quotes, setQuotes] = useState([])
  const [reminders, setReminders] = useState([])
  const [events, setEvents] = useState([])
  const [exercises, setExercises] = useState([])


  // const pickone = 

  useEffect(()=> {
    fetch(`http://localhost:8000/tasks`)
      .then(r=>r.json())
      .then(data=>setTasks(data))
  }, [])

  useEffect(()=> {
    fetch(`http://localhost:8000/quotes`)
      .then(r=>r.json())
      .then(data=>setQuotes(data))
  }, [])

  useEffect(()=> {
    fetch(`http://localhost:8000/reminders`)
      .then(r=>r.json())
      .then(data=>setReminders(data))
  }, [])

  useEffect(()=> {
    fetch(`http://localhost:8000/events`)
      .then(r=>r.json())
      .then(data=>setEvents(data))
  }, [])

  useEffect(()=> {
    fetch(`http://localhost:8000/exercises`)
      .then(r=>r.json())
      .then(data=>setExercises(data))
  }, [])

  function addNewTask(newTask){
    setTasks((prevState) => [...prevState, newTask])
  }

  function handleDeleteTask(taskToDelete){
    const updatedTasks = tasks.filter((task) => {
      if(task.id !== taskToDelete.id) {
        return task
      } else {
        return null
      }
    });
    setTasks(updatedTasks);
  }

// Figure out a way to make less fetches, 
// if === path ends in "quotes" 

  return (
    <div>
      <Switch>

        <Route path='/quotes'>
          <Quotes quotes={quotes}/> 
        </Route>

        <Route path='/reminders'>
          <Reminders reminders={reminders}/> 
        </Route>

        <Route path='/events'>
          <Events events={events}/> 
        </Route>

        <Route path ="/todolist">
          <TodoList 
            addNewTask={addNewTask} 
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}/> 
        </Route>

        <Route path="/exercises">
          <Exercises exercises={exercises}/> 
        </Route>

        <Route path="/">
          <Home 
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