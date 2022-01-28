import React, {useEffect, useState} from 'react';
import MainContainer from './MainContainer';
import Header from './Header';
import DateDisplay from './DateDisplay';
import { Route, Switch } from 'react-router-dom';



function App() {
  const [days, setDays] = useState([])
  const [count, setCount] = useState(5);

  useEffect(() => {
    fetch(`http://localhost:8000/dates`)
      .then((r) => r.json())
      .then((data) => setDays(data))
  }, [count])

  const dateArray = days.map((date) => date.date);
  
  let dateSplit = dateArray[count]?.split('-');
  
  // const dayDay = new Date ();
  // const splittedNewDay = dayDay.split("-")

  // if splittedNewDay === dateSplit 
  // return splittedNewDay
  // else null 

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // let dateItem = new Date(Date.UTC(dateArray[count].getFullYear(), dateArray[count].getMonth(), dateArray[count].getDate()));
  let dateItem = new Date(dateSplit).toLocaleDateString('en-US', options);


  
  const backArrow =`<`;
  const forwardArrow = `>`;
  
  return (

    <div className="App">
      <Header/>
      <br/>
      <MainContainer setCount={setCount} 
      count={count} 
      days={days} 
      dateItem={dateItem} 
      forwardArrow={forwardArrow} 
      backArrow={backArrow}
      />
      

    </div>
  );
}

export default App;

