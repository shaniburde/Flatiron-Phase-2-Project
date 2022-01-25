import React from 'react';

export default function Exercises({exercises}) {
  const exercisesList = exercises.map((exercise) => <li key={exercise.id}>{exercise.exercise}</li>)

  return (
  <div>
      <h2>Exercises</h2>
      {exercisesList}
  </div>
  )
}
