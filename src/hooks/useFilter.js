import { useSelector, useDispatch } from 'react-redux';
import { setFilterTo } from '../features/categoryFilter/categoryFilter';
import selectAllCategories from '../helpers/selectAllCategories';

const useFilter = () => {
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

  return {
    filteredBooks,
    allCategories,
    handleSelect,
  };
};

export default useFilter;
