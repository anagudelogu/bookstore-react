import styled from 'styled-components';

const BookProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
  }
`;

const ProgressNumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ProgressNumber = styled.span`
  font-family: var(--montserrat);

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProgressCompleted = styled.span`
  font-family: var(--montserrat);
  font-size: 0.6rem;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

export {
  BookProgressContainer,
  ProgressNumContainer,
  ProgressNumber,
  ProgressCompleted,
};
