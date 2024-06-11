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
      console.log("Product added:", action.payload);
      console.log("Current state:", state);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const newState = state.filter((product) => product.id !== action.payload);
      console.log("Product removed:", action.payload);
      console.log("Current state:", newState);
      return newState;
    },
  },
});

export const { addToCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
