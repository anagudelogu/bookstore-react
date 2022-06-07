import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../features/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <li>
      <div>
        <span>{title}</span>
        <span>{author}</span>
        <ul>
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button" onClick={handleClick}>
              Remove
            </button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
