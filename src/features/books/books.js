import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: [] };
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },

    removeBook: (state, action) => {
      const st = state;
      st.value = st.filter((state) => state.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
