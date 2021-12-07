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

const selectProductsState = state => state.products;

export const selectProducts = state => selectProductsState(state).products;
export const selectHideDone = state => selectProductsState(state).hideDone;

export const selectAreAllProductsDone = state =>
   selectProducts(state).every(({ done }) => done);
export const selectAreAllProductsNotDone = state =>
   selectProducts(state).every(({ done }) => !done);
export const selectAreProductsNotEmpty = state =>
   selectProducts(state).length > 0;

export default productsSlice.reducer;
