import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: Array<Products> = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.push(action.payload);
      } else {
        existingProduct.quantity += 1;
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
