import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleProducts, setProducts, productsRequestFailed } from "./productsSlice";
import { getExampleProducts } from "./getExampleProducts";

function* fetchExampleProductsHandler() {
    try {
        yield delay(1500);
        const exampleProducts = yield call(getExampleProducts);
        yield put(setProducts(exampleProducts));
    } catch (error) {
        yield put(productsRequestFailed());
        yield console.error(error);
    }
};

export function* watchFetchExampleProducts() {
    yield takeLatest(fetchExampleProducts.type, fetchExampleProductsHandler);
};