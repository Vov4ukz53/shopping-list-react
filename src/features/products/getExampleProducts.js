export const getExampleProducts = async () => {
   const responce = await fetch("/shopping-list-react/exampleProducts.json");

   if (!responce.ok){
      new Error(responce.statusText);
   }

   return responce.json();
};