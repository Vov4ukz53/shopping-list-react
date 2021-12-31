import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./features/products/rootSaga";
import productsReducer from "./features/products/productsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: productsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
