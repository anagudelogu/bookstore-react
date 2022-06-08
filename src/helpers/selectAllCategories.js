import store from '../features/configureStore';

const selectAllCategories = () => {
  const { books } = store.getState();

  const allCategories = Array.from(
    new Set(books.map((book) => book.category)),
  );
  return allCategories;
};

export default selectAllCategories;
