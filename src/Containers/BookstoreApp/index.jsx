import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { readExistingBooks } from '../../features/books/books';
import Bookshelf from '../Bookshelf';
import NewBookForm from '../NewBookForm';

const BookstoreApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readExistingBooks());
  }, []);

  return (
    <main className="App">
      <Bookshelf />
      <NewBookForm />
    </main>
  );
};

export default BookstoreApp;
