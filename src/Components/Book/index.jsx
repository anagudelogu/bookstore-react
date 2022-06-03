import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <li>
    <div>
      <span>{title}</span>
      <span>{author}</span>
    </div>
  </li>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
