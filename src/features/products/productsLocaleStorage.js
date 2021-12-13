const localeStorageKey = "products";

export const saveProductsInLocaleStorage = products =>
    localStorage.setItem(localeStorageKey, JSON.stringify(products));

export const getProductsFromLocaleStorage = () =>
    JSON.parse(localStorage.getItem(localeStorageKey)) || [];