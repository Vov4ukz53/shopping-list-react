import { Wrapper, Button } from "./styled.js";

const Buttons = ({ products, hideDone, toggleHideDone, setAllDone }) => (

   <Wrapper>
      {products.length > 0 && (
         <>
            <Button onClick={toggleHideDone}>
               {products.some(({ done }) => done) && hideDone
                  ? "Pokaż" : "Ukryj"} zaznaczone
            </Button>
            <Button
               disabled={products.every(({ done }) => done)}
               onClick={setAllDone}
            >
               Zaznacz wszystkie
            </Button>
         </>
      )}
   </Wrapper >
);


export default Buttons;
