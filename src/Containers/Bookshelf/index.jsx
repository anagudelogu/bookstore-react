import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../Components/Book';

const Bookshelf = () => {
  const books = useSelector((state) => state.books);

  return (
    <main>
      <ul>
        {books.map(({ id, title, author }) => (
          <Book key={id} title={title} author={author} />
        ))}
      </ul>
    </main>
  );
};

export default Bookshelf;
