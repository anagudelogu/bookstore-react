import React from 'react';
import useNewBookForm from '../../hooks/useNewBookForm';
import * as styled from './styledNewForm';

const NewBookForm = () => {
  const {
    title,
    author,
    category,
    newTitle,
    newAuthor,
    newCategory,
    submitNewBook,
  } = useNewBookForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitNewBook();
    e.target.reset();
  };

  const allCategories = [
    'Thriller',
    'Action',
    'Adventure',
    'Fiction',
    'Science Fiction',
    'Social phylosophy',
  ];

  return (
    <styled.FormContainer>
      <styled.Title>ADD NEW BOOK</styled.Title>
      <styled.Form onSubmit={handleSubmit}>
        <styled.Input
          name="title"
          type="text"
          placeholder="Enter book's title..."
          value={title}
          onChange={newTitle}
        />
        <styled.Input
          name="author"
          type="text"
          placeholder="Enter book's Author..."
          value={author}
          onChange={newAuthor}
        />
        <styled.DropDown
          name="categorySelector"
          onChange={newCategory}
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
