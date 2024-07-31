import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    console.log(`Fetching details for book ${id}...`);
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Book details fetched:', data);
        setBook(data);
      })
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} className="book-cover" />
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetailsPage;
