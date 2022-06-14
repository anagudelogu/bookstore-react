import styled from 'styled-components/macro';

const ChapterContainer = styled.div`
  grid-area: 2/1/3/3;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-template-rows: 1fr, 1fr;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    display: flex;
    grid-area: auto;
    margin-left: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
  }
`;

const ChapterLegend = styled.h4`
  font-family: var(--roboto);
  opacity: 0.5;
  font-weight: 300;
  font-size: 0.4rem;
  @media screen and (min-width: 768px) {
    font-size: 0.65rem;
  }
`;

const Chapter = styled.p`
  font-family: var(--roboto);
  font-size: 0.7rem;
`;

const UpdateProgressBtn = styled.button`
  outline: none;
  border: none;
  display: block;
  max-width: 140px;
  background-color: var(--blue);
  font-family: var(--roboto);
  letter-spacing: 0.5px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 0.5rem;
  grid-area: 1/2/3/3;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
    padding: 0.4rem 2rem;
    font-size: 0.6rem;
    width: auto;
    max-width: none;
  }
`;

export {
  ChapterContainer,
  ChapterLegend,
  Chapter,
  UpdateProgressBtn,
};
