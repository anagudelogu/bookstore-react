import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../features/books/books';
import * as styled from './styledBook';

const Book = ({
  id, title, author, category, progress,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <styled.ListItem>
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
      <CircularProgressBar
        size={75}
        animationSmooth="1s ease-out"
        colorCircle="#f1f1f1"
        colorSlice="#0290ff"
        percent={progress}
      />
    </styled.ListItem>
  );
};

export default Book;

Book.propTypes = {
  progress: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
