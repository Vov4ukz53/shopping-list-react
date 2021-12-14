import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import {
   fetchExampleProducts,
   selectError,
   selectLoading,
   selectAreExampleProducts
} from "../../productsSlice.js";

const ExampleProductsButton = () => {
   const loading = useSelector(selectLoading);
   const error = useSelector(selectError);
   const areExampleProducts = useSelector(selectAreExampleProducts);
   const dispatch = useDispatch();

   return (
      <Button
         error={error}
         disabled={loading || areExampleProducts}
         onClick={() => dispatch(fetchExampleProducts())}
      >
         {
            (() => {
               if (error) {
                  return "Błąd pobierania danych, spróbuj ponownie!";
               } else if (loading) {
                  return "Ładowanie...";
               } else if (areExampleProducts) {
                  return "Producty pobrane";
               } else {
                  return "Pobierz przykladowe producty";
               }
            })()
         }
      </Button>
   );
};

export default ExampleProductsButton;