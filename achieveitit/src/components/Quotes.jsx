import React from 'react';

export default function Quotes({quotes}) {
  const quoteList = quotes.map((quote) => <li key={quote.id}>{quote.quote}</li>)

  return (
    <div>
      <h3>Quote List:</h3>
      {quoteList}
    </div>);
}
