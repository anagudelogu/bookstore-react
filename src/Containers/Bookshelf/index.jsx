import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterTo } from '../../features/categoryFilter/categoryFilter';
import Book from '../../Components/Book';
import {
  Section,
  FilterContainer,
  Filter,
  BookList,
} from './styledBookshelf';

const Bookshelf = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const categoryFilter = useSelector((state) => state.categoryFilter);

  const filteredBooks = books.filter((book) => {
    if (categoryFilter === 'Show All') return book;
    return book.category === categoryFilter;
  });

  const allCategories = Array.from(
    new Set(books.map((book) => book.category)),
  );

  const handleSelect = (e) => {
    dispatch(setFilterTo(e.target.value));
  };

  return (
    <Section>
      <FilterContainer>
        Category:
        <Filter name="filter" onChange={handleSelect}>
          <option value="Show All">Show All</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Filter>
      </FilterContainer>
      <BookList>
        {filteredBooks.map(
          ({
            id, title, author, category, progress,
          }) => (
            <Book
              id={id}
              key={id}
              title={title}
              author={author}
              category={category}
              progress={progress}
            />
          ),
        )}
      </BookList>
    </Section>
  );
};

export default Bookshelf;
