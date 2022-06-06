import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <div>
      <span>{title}</span>
      <span>{author}</span>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button type="button">Remove</button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  </li>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
