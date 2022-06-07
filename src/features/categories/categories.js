import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { value: '' },
  reducers: {
    checkStatus: (state, action) => ({
      ...state,
      value: action.payload,
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
