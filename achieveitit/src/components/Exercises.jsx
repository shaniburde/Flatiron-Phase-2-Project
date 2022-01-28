import React from 'react';
import DateDisplay from './DateDisplay';

export default function Exercises({exercises, dateItem, count, setCount, forwardArrow, backArrow}) {
  const exercisesList = exercises.map((exercise) => <p key={exercise.id}>{exercise.exercise}</p>)

  return (
  <>
  <DateDisplay  
      setCount={setCount} 
      count={count}
      dateItem={dateItem} 
      forwardArrow={forwardArrow} 
      backArrow={backArrow}
      />
  <div className="exercises-list">
      <h2 className="exercise-header">Exercise of the Day</h2>
    <div className="exercise-container">
      <p className="exercise-item">{exercisesList}</p>
      <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?utm_source=generator&theme=0" width="100%" height="400px" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>

  </div>
  </>
  )
}
