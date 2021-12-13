import { createSlice } from '@reduxjs/toolkit';
import { getProductsFromLocaleStorage } from './productsLocaleStorage';

const productsSlice = createSlice({
   name: 'products',
   initialState: {
      products: getProductsFromLocaleStorage(),
      hideDone: false,
      loading: false,
      error: false,
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
      fetchExampleProducts: state => {
         state.loading = !state.loading
      },
      setProducts: (state, { payload: exampleProducts }) => {
         state.products = exampleProducts;
         state.loading = false;
      },
      productsRequestFailed: state => {
         state.error = true;
         state.loading = false;
      },
   },
});

export const {
   addProduct,
   toggleHideDone,
   toggleDoneProduct,
   removeProduct,
   setAllDone,
   fetchExampleProducts,
   productsRequestFailed,
   setProducts } = productsSlice.actions;

const selectProductsState = state => state.products;

export const selectProducts = state => selectProductsState(state).products;
export const selectHideDone = state => selectProductsState(state).hideDone;
export const selectLoading = state => selectProductsState(state).loading;
export const selectError = state => selectProductsState(state).error;

export const selectAreAllProductsDone = state =>
   selectProducts(state).every(({ done }) => done);

export const selectAreAllProductsNotDone = state =>
   selectProducts(state).every(({ done }) => !done);

export const selectAreProductsNotEmpty = state =>
   selectProducts(state).length > 0;

export const selectAreExampleProducts = state =>
   selectProducts(state).some(({ id }) =>
      id === "8wROpJA5ZbnXAymcQ4IB2"
      || id === "9nnWI7ma6t58_k9hRvRk2"
      || id === "Z3MfgjbWPl1MGS7TRtDO0");

export default productsSlice.reducer;
