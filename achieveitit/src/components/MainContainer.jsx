import React, {useState, useEffect} from 'react';
import Home from './Home';
import Quotes from "./Quotes";
import TodoList from "./TodoList";
import Reminders from "./Reminders";
import Events from "./Events";
import Exercises from "./Exercises";
import { Route, Switch } from 'react-router';


function MainContainer() {
  const [tasks, setTasks] = useState('')
  const [quotes, setQuotes] = useState('')
  const [reminders, setReminders] = useState('')


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
          <Events/> 
        </Route>

        <Route path ="/todolist">
          <TodoList tasks={tasks}/> 
        </Route>

        <Route path="/exercises">
          <Exercises/> 
        </Route>

        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  )
};

export default MainContainer;