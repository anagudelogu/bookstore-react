import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import categoryFilterReducer from './categoryFilter/categoryFilter';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    categoryFilter: categoryFilterReducer,
  },
});

export default store;
