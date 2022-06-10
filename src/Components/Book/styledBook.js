import styled from 'styled-components/macro';

const ListItem = styled.li`
  background-color: var(--white);
  border: 1px solid #e8e8e8;
  margin: 15px 0;
  padding: 5px 20px;
  min-height: 119px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  gap: 0;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr 2fr;
  }
`;

export default ListItem;
