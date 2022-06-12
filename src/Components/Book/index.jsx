import React from 'react';
import PropTypes from 'prop-types';
import useProgress from '../../hooks/useProgress';
import BookInfo from '../BookInfo';
import BookProgress from '../BookProgress';
import BookChapters from '../BookChapters';
import ListItem from './styledBook';

const Book = ({
  id, title, author, category, totalChapters,
}) => {
  const { progress, currentChapter, updateProgress } = useProgress({
    totalChapters,
  });

  return (
    <ListItem>
      <BookInfo
        id={id}
        title={title}
        author={author}
        category={category}
      />
      <BookProgress progress={progress} />
      <BookChapters
        updateProgress={updateProgress}
        currentChapter={currentChapter}
        totalChapters={totalChapters}
      />
    </ListItem>
  );
};

export default Book;

Book.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  totalChapters: PropTypes.number.isRequired,
};
