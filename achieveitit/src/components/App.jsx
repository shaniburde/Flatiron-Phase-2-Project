import React, {useEffect, useState} from 'react';
import MainContainer from './MainContainer';
import Header from './Header';


function App() {
  const [days, setDays] = useState([])
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8000/dates`)
      .then((r) => r.json())
      .then((data) => setDays(data))
  }, [count])

  const dateArray = days.map((date) => date.date);
  // console.log(dateArray)

  // console.log(currentDay)
  // const daysObj = currentDay[count]
  // daysObj.getFullYear()
  
  // const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // let dateItem = new Date(dateArray[count]).toLocaleDateString('en-US', options);

  // let dateItem = new Date(Date.UTC(dateArray[count].getFullYear(), dateArray[count].getMonth(), dateArray[count].getDate()));
  // console.log(dateArray)
  // console.log(dateItem)

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let dateItem = new Date(dateArray[count+1]).toLocaleDateString('en-US', options);

  // console.log(new Date(dateArray[0]))
  // let dateDisplay = dateItem
  // console.log(dateItem)
const backArrow =`<`;
const forwardArrow = `>`;

  return (

    <div className="App">
      <Header/>
      <br/>
      <h3><button className="button-counter" onClick={() => setCount(count - 1)}> {backArrow}</button> 
        <div className="date-item">
        {dateItem}
        </div>
       <button className="button-counter" onClick={() => setCount((count) => count + 1)}> {forwardArrow} </button> </h3>
      <br/>
      <MainContainer count={count} days={days} />
      
    </div>
  );
}

export default App;

