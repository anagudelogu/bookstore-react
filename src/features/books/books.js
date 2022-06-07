// Actions

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  {
    id: '1',
    title: 'The Analyst',
    author: 'John Katzenbatch',
    category: 'Thriller',
    progress: 76,
  },
  {
    id: '2',
    title: "The Madman's Tale",
    author: 'John Katzenbatch',
    category: 'Thriller',
    progress: 43,
  },
  {
    id: '3',
    title: 'Homo Deus',
    author: 'Yuval Noah Harari',
    category: 'Social philosophy',
    progress: 30,
  },
  {
    id: '4',
    title: 'Twenty Thousand Leagues Under the Sea',
    author: 'Jules Verne',
    category: 'Adventure',
    progress: 97,
  },
];

// Reducer

const booksReducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return [...state, action.payload];
  }

  if (action.type === REMOVE) {
    return state.filter((book) => book.id !== action.payload);
  }

  return state;
};

// Action creators

const addBook = (book) => ({
  type: ADD,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE,
  payload: id,
});

export default booksReducer;
export { addBook, removeBook };
