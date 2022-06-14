import React from 'react';
import Book from '../../Components/Book';
import * as styled from './styledBookshelf';
import useFilter from '../../hooks/useFilter';

const Bookshelf = () => {
  const { filteredBooks, allCategories, handleSelect } = useFilter();

  return (
    <styled.Section>
      <styled.FilterContainer>
        Category:
        <styled.Filter
          name="filter"
          onChange={(e) => handleSelect(e)}
        >
          <option value="Show All">Show All</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </styled.Filter>
      </styled.FilterContainer>
      <styled.BookList>
        {filteredBooks.map(({
          id, title, author, category,
        }) => (
          <Book
            id={id}
            key={id}
            title={title}
            author={author}
            category={category}
          />
        ))}
      </styled.BookList>
    </styled.Section>
  );
};

export default Bookshelf;
