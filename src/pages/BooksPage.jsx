import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log('Fetching books...');
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => {
        console.log('Books fetched:', data);
        setBooks(data);
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="books-container">
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map(book => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <img src={book.image} alt={book.title} className="book-cover" onError={(e) => console.error('Error loading image:', e.target.src)} />
          </Link>
        ))
      )}
    </div>
  );
}

export default BooksPage;
