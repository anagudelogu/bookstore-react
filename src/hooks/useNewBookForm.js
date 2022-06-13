import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../features/books/books';

const useNewBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const clearInputs = () => {
    setTitle('');
    setAuthor('');
  };

  const newTitle = (e) => {
    setTitle(e.target.value);
  };

  const newAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const newCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitNewBook = () => {
    dispatch(
      addBook({
        id: uuidv4(),
        title,
        author,
        category,
      }),
    );
    clearInputs();
  };

  return {
    title,
    author,
    category,
    newTitle,
    newAuthor,
    newCategory,
    submitNewBook,
  };
};

export default useNewBookForm;
