import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (args) => {
    const { category, sorts, sort, search } = args;
    const { data } = await axios.get(
      `https://6548b571dd8ebcd4ab236f45.mockapi.io/items?category=${
        category > 0 ? category : ''
      }&sortBy=${sorts[sort]}&order=asc&title=${search ? search : ''}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
