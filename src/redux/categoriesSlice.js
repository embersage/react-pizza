import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
