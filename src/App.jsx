import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import QuotesPage from './pages/QuotesPage';

function App() {
  return (
    <div>
      <nav>
        <Link to="/books">Books</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <h1>Seuss Treasury</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
