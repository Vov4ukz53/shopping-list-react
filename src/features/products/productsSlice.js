import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
   name: 'products',
   initialState: {
      products: [],
      hideDone: false,
   },
   reducers: {
      addProduct: ({ products }, { payload: newProduct }) => {
         products.push(newProduct);
      },
      toggleHideDone: state => {
         state.hideDone = !state.hideDone;
      },
      toggleDoneProduct: ({ products }, { payload: productId }) => {
         const index = products.findIndex(
            product => product.id === productId);
         products[index].done = !products[index].done;
      },
      removeProduct: ({ products }, { payload: productId }) => {
         const index = products.findIndex(
            product => product.id === productId);
         products.splice(index, 1);
      },
      setAllDone: ({ products }) => {
         products.forEach(product => product.done = true);
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

export const selectAreAllProductsDone = state =>
   selectProducts(state).products.every(({ done }) => done);
export const selectAreAllProductsNotDone = state =>
   selectProducts(state).products.every(({ done }) => !done);
export const selectAreProductsNotEmpty = state =>
   selectProducts(state).products.length > 0;

export default productsSlice.reducer;
