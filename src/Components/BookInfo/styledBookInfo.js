import styled from 'styled-components';

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Category = styled.span`
  opacity: 0.5;
  font-size: 0.6rem;
  font-family: var(--montserrat);
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Title = styled.h3`
  color: black;
  font-size: 1rem;
  font-family: var(--roboto);
  letter-spacing: -0.2px;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Author = styled.span`
  color: var(--blue);
  font-size: 0.6rem;
  font-family: var(--roboto);

  @media screen and (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const BookOptions = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  gap: 4%;
  margin-top: 8px;
`;

const BookOption = styled.button`
  appearance: none;
  outline: none;
  border: none;
  color: var(--blue);
  background-color: transparent;
  font-size: 0.6rem;
  font-family: var(--roboto);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

export {
  BookInfoContainer,
  Category,
  Title,
  Author,
  BookOptions,
  BookOption,
};
