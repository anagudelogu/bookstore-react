// Actions

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer

const categoriesReducer = (state = '', action) => {
  if (action.type === CHECK_STATUS) {
    return state.concat('Under construction');
  }
  return state;
};

// Action creators

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;

export { checkStatus };
