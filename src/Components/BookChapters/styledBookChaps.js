import styled from 'styled-components/macro';

const ChapterContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    margin-left: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
  }
`;

const ChapterLegend = styled.h4`
  font-family: var(--roboto);
  font-size: 0.5rem;
  opacity: 0.5;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: 0.65rem;
  }
`;

const Chapter = styled.p`
  font-family: var(--roboto);
`;

const UpdateProgressBtn = styled.button`
  outline: none;
  border: none;
  margin-top: 8px;
  display: block;
  padding: 0.4rem 2rem;
  background-color: var(--blue);
  font-family: var(--roboto);
  letter-spacing: 0.5px;
  font-weight: bold;
  font-size: 0.6rem;
  border-radius: 3px;
  color: white;
  cursor: pointer;
`;

export {
  ChapterContainer,
  ChapterLegend,
  Chapter,
  UpdateProgressBtn,
};
