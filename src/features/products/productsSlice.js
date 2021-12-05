import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
   name: 'products',
   initialState: {
      products: [],
      hideDone: false,
   },
   reducers: {
      addProduct: (previousState, action) => {
         previousState.products.push(action.payload);
      },
      toggleHideDone: state => {
         state.hideDone = !state.hideDone;
      },
      toggleDoneProduct: (state, action) => {
         const index = state.products.findIndex(
            product => product.id === action.payload);
         state.products[index].done = !state.products[index].done;
      },
      removeProduct: (previousState, action) => {
         const index = previousState.products.findIndex(
            product => product.id === action.payload);
         previousState.products.splice(index, 1);
      },
      setAllDone: (state) => {
         for (const product of state.products) {
            product.done = true;
         }
      },
   },
});

export const {
   addProduct,
   toggleHideDone,
   toggleDoneProduct,
   removeProduct,
   setAllDone } = productsSlice.actions;
export const selectProducts = state => state.products;
export default productsSlice.reducer;
