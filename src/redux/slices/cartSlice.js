import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
    appendItem: (state, action) => {
      if (
        !state.items.find(
          (item) =>
            item.id === action.payload.id &&
            item.doughType === action.payload.doughType &&
            item.size === action.payload.size
        )
      ) {
        state.items = [...state.items, action.payload];
      } else {
        const item = state.items.find(
          (item) =>
            item.id === action.payload.id &&
            item.doughType === action.payload.doughType &&
            item.size === action.payload.size
        );
        item.count++;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.doughType === action.payload.doughType &&
          item.size === action.payload.size
      );
      item.count--;
      if (item.count === 0) {
        const index = state.items.findIndex(
          (i) =>
            i.id === item.id &&
            i.doughType === item.doughType &&
            i.size === item.size
        );
        state.items.splice(index, 1);
      }
    },
    removeType: (state, action) => {
      const index = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.doughType === action.payload.doughType &&
          item.size === action.payload.size
      );
      state.items.splice(index, 1);
    },
  },
});

export const { clearItems, appendItem, removeItem, removeType } =
  cartSlice.actions;

export default cartSlice.reducer;
