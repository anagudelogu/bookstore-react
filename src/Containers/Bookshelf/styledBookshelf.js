import styled from 'styled-components/macro';

const Section = styled.section`
  background-color: var(--light-gray);
  padding-top: 20px;
`;

const FilterContainer = styled.div`
  width: 90%;
  padding: 3px 5px;
  margin: 0 auto;
  background-color: var(--white);
  text-align: center;
  border: 1px solid #e8e8e8;
  font-family: var(--montserrat);
  font-weight: bold;
  font-size: 0.8rem;

  @media screen and (min-width: 768px) {
    padding-left: 5%;
    text-align: left;
  }
`;

const Filter = styled.select`
  margin-left: 15px;
  font-family: var(--montserrat);
  font-size: 0.8rem;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const BookList = styled.ul`
  list-style: none;
  width: 90%;
  margin: 20px auto;
  max-height: 50vh;
  min-height: 50vh;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    max-height: 60vh;
    min-height: 60vh;
  }
`;

export {
  Section, FilterContainer, Filter, BookList,
};
