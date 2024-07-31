import React, { useEffect, useState } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    console.log('Fetching quotes...');
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => response.json())
      .then(data => {
        console.log('Quotes fetched:', data);
        setQuotes(data);
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <div className="quotes-container">
      <h1>Quotes</h1>
      <ul className="quotes-list">
        {quotes.map(quote => (
          <li key={quote.id} className="quote-item">
            "{quote.text}"
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuotesPage;
