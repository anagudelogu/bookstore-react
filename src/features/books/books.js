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
  const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
  dispatch({
    type: READ,
    payload: sortedBooks,
  });
};

const addBook = (book) => async (dispatch) => {
  await addNewBook(book);
  dispatch({
    type: ADD,
    payload: {
      ...book,
      totalChapters: Math.floor(Math.random() * 15) + 10,
    },
  });
};

const removeBook = (id) => async (dispatch) => {
  await removeBookFromAPI(id);
  localStorage.removeItem(id);
  dispatch({
    type: REMOVE,
    payload: id,
  });
};

export default booksReducer;
export { addBook, removeBook, readExistingBooks };
