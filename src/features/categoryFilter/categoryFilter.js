// Actions

const SET_FILTER = 'bookstore/categoryFilter/SET_FILTER';

// Reducer

const categoryFilterReducer = (state = 'Show All', action) => {
  if (action.type === SET_FILTER) {
    return action.payload;
  }
  return state;
};

// Action Creators

const setFilterTo = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export default categoryFilterReducer;

export { setFilterTo };
