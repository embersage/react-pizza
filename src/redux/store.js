import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';
import sortReducer from './sortSlice';

export const store = configureStore({
  reducer: {
    category: categoriesReducer,
    sort: sortReducer,
  },
});
