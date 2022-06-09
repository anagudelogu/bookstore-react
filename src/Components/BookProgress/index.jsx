import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import * as styled from './styledBookProgress';

const BookProgress = ({ progress }) => (
  <styled.BookProgressContainer>
    <CircularProgressBar
      size={50}
      animationSmooth="1s ease-out"
      colorCircle="#f1f1f1"
      colorSlice="#0290ff"
      percent={progress}
      number={false}
    />
    <styled.ProgressNumContainer>
      <styled.ProgressNumber>
        {progress}
        %
      </styled.ProgressNumber>
      <styled.ProgressCompleted>completed</styled.ProgressCompleted>
    </styled.ProgressNumContainer>
  </styled.BookProgressContainer>
);

export default BookProgress;

BookProgress.propTypes = {
  progress: PropTypes.number.isRequired,
};
