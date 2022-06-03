import React from 'react';
import Book from '../../Components/Book';

const Bookshelf = () => {
  const books = [
    {
      id: 1,
      title: 'The Analyst',
      author: 'John Katzenbach',
    },
    {
      id: 2,
      title: 'The Analyst II',
      author: 'John Katzenbach',
    },
    {
      id: 3,
      title: "The Madman's Tale",
      author: 'John Katzenbach',
    },
  ];
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
