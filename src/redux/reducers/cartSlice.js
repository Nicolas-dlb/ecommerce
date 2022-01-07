import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      image: "/images/image-product-1.jpg",
      name: "Fall Limited Edition Sneakers",
      number: 3,
      price: 125,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.name !== action.payload
      );
    },
  },
});
export const selectProducts = (state) => state.cart.products;
export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
