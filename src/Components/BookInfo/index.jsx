import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../features/books/books';
import * as styled from './styledBookInfo';

const BookInfo = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <styled.BookInfoContainer>
      <styled.Category>{category}</styled.Category>
      <styled.Title>{title}</styled.Title>
      <styled.Author>{author}</styled.Author>
      <styled.BookOptions>
        <li>
          <styled.BookOption type="button">
            Comments
          </styled.BookOption>
        </li>
        <li>
          <styled.BookOption type="button" onClick={handleClick}>
            Remove
          </styled.BookOption>
        </li>
        <li>
          <styled.BookOption type="button">Edit</styled.BookOption>
        </li>
      </styled.BookOptions>
    </styled.BookInfoContainer>
  );
};

export default BookInfo;

BookInfo.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
