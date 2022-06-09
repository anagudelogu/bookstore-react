import React from 'react';
import * as styled from './styledBookChaps';

const BookChapters = () => (
  <styled.ChapterContainer>
    <styled.ChapterLegend>CURRENT CHAPTER</styled.ChapterLegend>
    <styled.Chapter>Chapter 1</styled.Chapter>
    <styled.UpdateProgressBtn>
      UPDATE CHAPTER
    </styled.UpdateProgressBtn>
  </styled.ChapterContainer>
);

export default BookChapters;
