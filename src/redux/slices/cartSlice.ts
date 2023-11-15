import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartItem = {
  id: number;
  imageUrl: string;
  title: string;
  doughType: string;
  size: number;
  price: number;
  count: number;
};

interface CartSliceState {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const updateValues = (state) => {
  state.totalPrice = state.items.reduce((sum: number, currItem: CartItem) => {
    return sum + currItem.price * currItem.count;
  }, 0);
  state.totalCount = state.items.reduce((count: number, currItem: CartItem) => {
    return count + currItem.count;
  }, 0);
};

const findItem = (state, newItem: CartItem) => {
  return state.items.find(
    (item) =>
      item.id === newItem.id &&
      item.doughType === newItem.doughType &&
      item.size === newItem.size
  );
};

const findInd = (state, newItem: CartItem) => {
  return state.items.findIndex(
    (i) =>
      i.id === newItem.id &&
      i.doughType === newItem.doughType &&
      i.size === newItem.size
  );
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    appendItem: (state, action: PayloadAction<CartItem>) => {
      const item = findItem(state, action.payload);
      if (item) {
        item.count++;
        updateValues(state);
      } else {
        state.items = [...state.items, action.payload];
        updateValues(state);
      }
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const item = findItem(state, action.payload);
      item.count--;
      state.totalPrice -= item.price;
      state.totalCount--;
      if (item.count === 0) {
        state.items.splice(findInd(state, item), 1);
      }
    },
    removeType: (state, action: PayloadAction<CartItem>) => {
      state.totalPrice -= action.payload.price * action.payload.count;
      state.totalCount -= action.payload.count;
      state.items.splice(findInd(state, action.payload), 1);
    },
  },
});

export const selectCart = (state: RootState) => state.cart.items;

export const { clearItems, appendItem, removeItem, removeType } =
  cartSlice.actions;

export default cartSlice.reducer;
