import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects";
import {
    fetchExampleProducts,
    setProducts,
    productsRequestFailed,
    selectProducts
} from "./productsSlice";
import { getExampleProducts } from "./getExampleProducts";
import { saveProductsInLocaleStorage } from "./productsLocaleStorage";

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

function* saveProductsInLocaleStorageHandler() {
    const products = yield select(selectProducts);
    yield call(saveProductsInLocaleStorage, products);
}

function* productsSAGA() {
    yield takeLatest(fetchExampleProducts.type, fetchExampleProductsHandler);
    yield takeEvery("*", saveProductsInLocaleStorageHandler);
};

export default productsSAGA;