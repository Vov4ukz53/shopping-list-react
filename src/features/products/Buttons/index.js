import { Wrapper, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import {
   selectProducts,
   toggleHideDone,
   setAllDone,
   selectAllProductsMarked,
   selectNoMarkedProducts,
   selectProductsAreAvailable
} from "../productsSlice.js";

const Buttons = () => {
   const { hideDone } = useSelector(selectProducts);
   const allProductsMarked = useSelector(selectAllProductsMarked);
   const noMarkedProducts = useSelector(selectNoMarkedProducts);
   const productsAreAvailable = useSelector(selectProductsAreAvailable);
   const dispatch = useDispatch();

   return (
      <Wrapper>
         {productsAreAvailable && (
            <>
               <Button
                  disabled={noMarkedProducts}
                  onClick={() => dispatch(toggleHideDone())}
               >
                  {hideDone ? "Pokaż" : "Ukryj"} zaznaczone
               </Button>
               <Button
                  disabled={allProductsMarked}
                  onClick={() => dispatch(setAllDone())}
               >
                  Zaznacz wszystkie
               </Button>
            </>
         )}
      </Wrapper >
   );
};

export default Buttons;
