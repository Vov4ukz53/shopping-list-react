import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleProducts, setProducts, setError } from "./productsSlice";
import { getExampleProducts } from "./getExampleProducts";

function* fetchExampleProductsHandler() {
    try {
        yield delay(1500);
        const exampleProducts = yield call(getExampleProducts);
        yield put(setProducts(exampleProducts));
    } catch (error) {
        yield put(setError());
        yield console.error(error);
    }
};

export function* watchFetchExampleProducts() {
    yield takeLatest(fetchExampleProducts.type, fetchExampleProductsHandler);
};