/* eslint-disable no-unused-expressions */
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
// function containsObject(obj, list) {
//   let i;
//   for (i = 0; i < list.length; i++) {
//     if (list[i] === obj) {
//       return true;
//     }
//   }

//   return false;
// }
let num = 0;
let it;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.map((item) => {
        if (item.name === action.payload.name) {
          num = action.payload.number;
          it = item;
          it.number = item.number + num;
          return it;
        }
        return it;
      });
      num === 0
        ? (state.products = [...state.products, action.payload])
        : (num = 0);
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
