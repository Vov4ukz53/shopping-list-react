import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSAGA from "./features/products/rootSAGA";
import productsReducer from "./features/products/productsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSAGA);

export default store;
