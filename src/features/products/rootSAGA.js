import { all } from "redux-saga/effects";
import { watchFetchExampleProducts } from "./productsSAGA";

export default function* rootSAGA() {
    yield all([
        watchFetchExampleProducts(),
    ]);
};