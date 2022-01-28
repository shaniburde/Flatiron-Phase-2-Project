import React from 'react';

export default function DateDisplay({dateItem, count, setCount, forwardArrow, backArrow}) {



  return (<div>
 <h3><button className="button-counter" onClick={() => setCount(count - 1)}> {backArrow}</button> 
        <div className="date-item">
        {dateItem}
        </div>
       <button className="button-counter" onClick={() => setCount((count) => count + 1)}> {forwardArrow} </button> </h3>
       <br/>

  </div>);
}