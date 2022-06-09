import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../features/books/books';
import * as styled from './styledNewForm';

const NewBookForm = () => {
  const dispatch = useDispatch();

  const allCategories = [
    'Thriller',
    'Action',
    'Adventure',
    'Fiction',
    'Science Fiction',
    'Social phylosophy',
  ];

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: uuidv4(),
        title,
        author,
        category,
      }),
    );
    clearInputs();
    e.target.reset();
  };

  return (
    <styled.FormContainer>
      <styled.Title>ADD NEW BOOK</styled.Title>
      <styled.Form onSubmit={handleSubmit}>
        <styled.Input
          name="title"
          type="text"
          placeholder="Enter book's title..."
          value={title}
          onChange={handleTitleChange}
        />
        <styled.Input
          name="author"
          type="text"
          placeholder="Enter book's Author..."
          value={author}
          onChange={handleAuthorChange}
        />
        <styled.DropDown
          name="categorySelector"
          onChange={handleCategoryChange}
        >
          <option defaultValue={category}>Select Category</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </styled.DropDown>
        <styled.Button type="submit">ADD BOOK</styled.Button>
      </styled.Form>
    </styled.FormContainer>
  );
};

export default NewBookForm;
