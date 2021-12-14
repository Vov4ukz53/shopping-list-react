import { Wrapper } from "./styled.js";
import { Button } from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
   toggleHideDone,
   setAllDone,
   selectAreAllProductsDone,
   selectAreAllProductsNotDone,
   selectAreProductsNotEmpty,
   selectHideDone
} from "../../productsSlice";

const Buttons = () => {
   const hideDone = useSelector(selectHideDone);
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
