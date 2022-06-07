import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../features/books/books';
import {
  ListItem,
  BookInfoContainer,
  Category,
  Title,
  Author,
  BookOption,
  BookOptions,
} from './styledBook';

const Book = ({
  id, title, author, category, progress,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <ListItem>
      <BookInfoContainer>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <BookOptions>
          <li>
            <BookOption type="button">Comments</BookOption>
          </li>
          <li>
            <BookOption type="button" onClick={handleClick}>
              Remove
            </BookOption>
          </li>
          <li>
            <BookOption type="button">Edit</BookOption>
          </li>
        </BookOptions>
      </BookInfoContainer>
      <CircularProgressBar
        size={75}
        animationSmooth="1s ease-out"
        colorCircle="#f1f1f1"
        colorSlice="#0290ff"
        percent={progress}
      />
    </ListItem>
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
