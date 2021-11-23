import { useState, useEffect } from "react";

const getInitialProducts = () => {
   const productsFromLocaleStorage = localStorage.getItem("products");

   return productsFromLocaleStorage
      ? JSON.parse(productsFromLocaleStorage)
      : [];
};

export const useProducts = () => {
   const [products, setProducts] = useState(getInitialProducts);

   useEffect(() => {
      localStorage.setItem("products", JSON.stringify(products));
   }, [products]);

   const addNewProduct = (newProductContent) => {
      setProducts(products => [
         ...products,
         {
            content: newProductContent,
            done: false,
            id: products.length ? products[products.length - 1].id + 1 : 1,
         },
      ]);
   };

   const removeProduct = (id) => {
      setProducts(products =>
         products.filter(product => product.id !== id));
   };

   const toggleDoneProduct = (id) => {
      setProducts(products => products.map(product => {
         if (product.id === id) {
            return { ...product, done: !product.done };
         }

         return product;
      }));
   };

   const setAllDone = () => {
      setProducts(products => products.map(product => ({
         ...product,
         done: true,
      })));
   };

   return {
      products, addNewProduct, removeProduct, toggleDoneProduct, setAllDone
   };
}