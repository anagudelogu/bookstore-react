import styled from 'styled-components/macro';

const ListItem = styled.li`
  background-color: var(--white);
  border: 1px solid #e8e8e8;
  margin: 15px 0;
  padding: 5px 20px;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Category = styled.span`
  color: var(--mid-gray);
  font-size: 0.6rem;
  font-family: var(--montserrat);
  opacity: 0.5;
  font-weight: bold;
`;

const Title = styled.h3`
  color: black;
  font-size: 1rem;
  font-family: var(--roboto);
  letter-spacing: -0.2px;
  font-weight: bold;
`;

const Author = styled.span`
  color: var(--blue);
  font-size: 0.6rem;
  font-family: var(--roboto);
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
`;
export {
  ListItem,
  BookInfoContainer,
  Category,
  Title,
  Author,
  BookOption,
  BookOptions,
};
