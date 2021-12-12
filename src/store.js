import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchExampleProducts } from "./features/products/productsSAGA";
import productsReducer from "./features/products/productsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchExampleProducts);

export default store;
