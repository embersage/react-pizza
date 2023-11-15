import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FilterSliceState {
  category: number;
  sort: number;
  search: string;
}

const initialState: FilterSliceState = {
  category: 0,
  sort: 0,
  search: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<number>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
