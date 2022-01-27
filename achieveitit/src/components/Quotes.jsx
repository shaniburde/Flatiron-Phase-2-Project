import React from 'react';

export default function Quotes({quotes}) {
  const quoteList = quotes.map((quote) => <p className="quote-lister" key={quote.id}>"{quote.quote}"</p>)

  return (
    <div className="quotes-page">
      <h2 className="quotes-header">Inspirational Quotes</h2><br/>
      {quoteList}
    </div>);
}
