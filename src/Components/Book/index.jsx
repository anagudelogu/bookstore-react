import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from '../BookInfo';
import BookProgress from '../BookProgress';
import BookChapters from '../BookChapters';
import ListItem from './styledBook';

const Book = ({
  id, title, author, category, progress,
}) => (
  <ListItem>
    <BookInfo
      id={id}
      title={title}
      author={author}
      category={category}
    />
    <BookProgress progress={progress} />
    <BookChapters />
  </ListItem>
);

export default Book;

Book.propTypes = {
  progress: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
