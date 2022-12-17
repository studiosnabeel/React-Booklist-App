import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DisplayBook from './DisplayBook';

export default function BooksList() {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'Return of the Dragon',
      category: 'Action',
      currentChapter: 'Chapter 21',
      progress: 45,
    },
    {
      id: uuidv4(),
      title: 'The Lost Island',
      category: 'Sci-fi',
      currentChapter: 'Chapter 1',
      progress: 65,
    },
    {
      id: uuidv4(),
      title: 'Tomb Raider',
      category: 'Thriller',
      currentChapter: 'Chapter 15',
      progress: 20,
    },
  ]);
  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="container">
          <DisplayBook book={book} />
        </div>
      ))}
    </div>
  );
}
