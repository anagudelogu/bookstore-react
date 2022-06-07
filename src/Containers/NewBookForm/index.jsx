import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../features/books/books';

const NewBookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const clearInputs = () => {
    setTitle('');
    setAuthor('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: uuidv4(),
        title,
        author,
        category: 'cat',
        progress: 0,
      }),
    );
    clearInputs();
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Enter book's title..."
          value={title}
          onChange={handleTitleChange}
        />
        <input
          name="author"
          type="text"
          placeholder="Enter book's Author..."
          value={author}
          onChange={handleAuthorChange}
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBookForm;
