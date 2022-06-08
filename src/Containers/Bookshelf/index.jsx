import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterTo } from '../../features/categoryFilter/categoryFilter';
import Book from '../../Components/Book';
import selectAllCategories from '../../helpers/selectAllCategories';
import * as styled from './styledBookshelf';

const Bookshelf = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const categoryFilter = useSelector((state) => state.categoryFilter);

  const filteredBooks = books.filter((book) => {
    if (categoryFilter === 'Show All') return book;
    return book.category === categoryFilter;
  });

  const allCategories = selectAllCategories();

  const handleSelect = (e) => {
    dispatch(setFilterTo(e.target.value));
  };

  return (
    <styled.Section>
      <styled.FilterContainer>
        Category:
        <styled.Filter name="filter" onChange={handleSelect}>
          <option value="Show All">Show All</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </styled.Filter>
      </styled.FilterContainer>
      <styled.BookList>
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
      </styled.BookList>
    </styled.Section>
  );
};

export default Bookshelf;
