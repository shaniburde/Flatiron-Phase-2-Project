import React, {useEffect, useState} from 'react';
import MainContainer from './MainContainer';
import Header from './Header';


function App() {
  const [days, setDays] = useState([])
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8000/dates`)
      .then((r) => r.json())
      .then((data) => setDays(data))
  }, [])

  const currentDay = days.map((day) => day.date)
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let dateItem = new Date(currentDay[count]).toLocaleDateString('en-US', options);

  return (

    <div className="App">
      <Header/>
      <br/>
      <h3><button onClick={() => setCount(count - 1)}> ⬅️ </button> {dateItem} <button onClick={() => setCount((count) => count + 1)}> ➡️ </button> </h3>
      <br/>
      <MainContainer count={count} />
      
    </div>
  );
}

export default App;

