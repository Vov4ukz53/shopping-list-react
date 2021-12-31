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
            loading
               ? "Ładowanie..."
               : areExampleProducts
                  ? "Produkty pobrane"
                  : error
                     ? "Błąd pobierania danych, spróbuj ponownie!"
                     : "Pobierz przykladowe producty"
         }
      </Button>
   );
};

export default ExampleProductsButton;