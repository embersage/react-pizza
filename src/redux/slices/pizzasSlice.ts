import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type FetchPizzasProps = {
  category: number;
  sorts: string[];
  sort: number;
  search: string;
};

type Pizza = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasProps>(
  'pizzas/fetchPizzas',
  async ({ category, sorts, sort, search }) => {
    const { data } = await axios.get<Pizza[]>(
      `https://6548b571dd8ebcd4ab236f45.mockapi.io/items?category=${
        category > 0 ? category : ''
      }&sortBy=${sorts[sort]}&order=asc&title=${search ? search : ''}`
    );
    return data;
  }
);

interface PizzasSliceState {
  items: Pizza[];
  status: 'loading' | 'succeeded' | 'error';
}

const initialState: PizzasSliceState = {
  items: [],
  status: 'loading',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Pizza[]>) => {
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
