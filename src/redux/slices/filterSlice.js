import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  sort: 0,
  search: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
