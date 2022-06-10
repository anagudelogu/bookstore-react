import {
  getExistingBooks,
  addNewBook,
  removeBookFromAPI,
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
    payload: { ...book, progress: 0 },
  });
};

const removeBook = (id) => async (dispatch) => {
  await removeBookFromAPI(id);

  dispatch({
    type: REMOVE,
    payload: id,
  });
};

export default booksReducer;
export { addBook, removeBook, readExistingBooks };
