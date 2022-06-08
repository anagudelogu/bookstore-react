import {
  getExistingBooks,
  addNewBook,
} from '../../services/bookstoreAPI';

// Actions

const READ = 'bookstore/books/READ';
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Reducer

const booksReducer = (state = [], action) => {
  if (action.type === READ) {
    return action.payload;
  }

  if (action.type === ADD) {
    return [...state, action.payload];
  }

  if (action.type === REMOVE) {
    return state.filter((book) => book.id !== action.payload);
  }

  return state;
};

// Action creators

const readExistingBooks = () => async (dispatch) => {
  const books = await getExistingBooks();
  dispatch({
    type: READ,
    payload: books,
  });
};

const addBook = (book) => async (dispatch) => {
  await addNewBook(book);

  dispatch({
    type: ADD,
    payload: book,
  });
};

const removeBook = (id) => ({
  type: REMOVE,
  payload: id,
});

export default booksReducer;
export { addBook, removeBook, readExistingBooks };
