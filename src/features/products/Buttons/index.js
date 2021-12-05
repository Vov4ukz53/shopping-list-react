import { Wrapper, Button } from "./styled.js";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, toggleHideDone, setAllDone } from "../productsSlice.js";

const Buttons = () => {
   const { products, hideDone } = useSelector(selectProducts);
   const dispatch = useDispatch();

   return (
      <Wrapper>
         {products.length > 0 && (
            <>
               <Button
                  disabled={products.every(({ done }) => !done)}
                  onClick={() => dispatch(toggleHideDone())}
               >
                  {hideDone ? "Pokaż" : "Ukryj"} zaznaczone
               </Button>
               <Button
                  disabled={products.every(({ done }) => done)}
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
