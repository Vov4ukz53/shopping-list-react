import "./style.css";

const Buttons = ({ products, hideDone, toggleHideDone, setAllDone }) => (

   <div className="section__buttons">
      {products.length > 0 && (
         <>
            <button
               className="section__button"
               onClick={toggleHideDone}>
               {products.some(({ done }) => done) && hideDone
                  ? "Pokaż" : "Ukryj"} zaznaczone
            </button>
            <button
               className="section__button"
               disabled={products.every(({ done }) => done)}
               onClick={setAllDone}
            >
               Zaznacz wszystkie
            </button>
         </>
      )}
   </div >
);


export default Buttons;
