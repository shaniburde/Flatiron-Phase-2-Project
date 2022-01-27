import React from 'react';

export default function Exercises({exercises}) {
  const exercisesList = exercises.map((exercise) => <p key={exercise.id}>{exercise.exercise}</p>)

  return (
  <div className="exercises-list">
      <h2 className="exercise-header">Exercise of the Day:</h2>
    <div className="exercise-container">
      <p className="exercise-item">{exercisesList}</p>
    </div>
  </div>
  )
}
