import { Wrapper } from "./styled.js";
import {Button} from "./../Button";
import { useSelector, useDispatch } from "react-redux";
import {
   selectProducts,
   toggleHideDone,
   setAllDone,
   selectAreAllProductsDone,
   selectAreAllProductsNotDone,
   selectAreProductsNotEmpty
} from "../productsSlice.js";

const Buttons = () => {
   const { hideDone } = useSelector(selectProducts);
   const areAllProductsDone = useSelector(selectAreAllProductsDone);
   const areAllProductsNotDone = useSelector(selectAreAllProductsNotDone);
   const areProductsNotEmpty = useSelector(selectAreProductsNotEmpty);
   const dispatch = useDispatch();

   return (
      <Wrapper>
         {areProductsNotEmpty && (
            <>
               <Button
                  disabled={areAllProductsNotDone}
                  onClick={() => dispatch(toggleHideDone())}
               >
                  {hideDone ? "Pokaż" : "Ukryj"} zaznaczone
               </Button>
               <Button
                  disabled={areAllProductsDone}
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
