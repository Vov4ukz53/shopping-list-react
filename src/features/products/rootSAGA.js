import { all } from "redux-saga/effects";
import productsSaga from "./productsSAGA";

export default function* rootSAGA() {
    yield all([
        productsSaga(),
    ]);
};