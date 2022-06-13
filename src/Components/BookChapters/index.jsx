import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styledBookChaps';

const BookChapters = ({
  updateProgress,
  currentChapter,
  totalChapters,
}) => (
  <styled.ChapterContainer>
    <styled.ChapterLegend>CURRENT CHAPTER</styled.ChapterLegend>
    <styled.Chapter>
      {currentChapter >= totalChapters
        ? 'Finished'
        : `Chapter ${currentChapter}`}
    </styled.Chapter>
    <styled.UpdateProgressBtn
      onClick={() => {
        updateProgress();
      }}
    >
      UPDATE CHAPTER
    </styled.UpdateProgressBtn>
  </styled.ChapterContainer>
);

export default BookChapters;

BookChapters.propTypes = {
  updateProgress: PropTypes.func.isRequired,
  currentChapter: PropTypes.number.isRequired,
  totalChapters: PropTypes.number.isRequired,
};
