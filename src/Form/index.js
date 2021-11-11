import { useState, useRef, useEffect } from "react";
import "./style.css";

const Form = ({ addNewProduct }) => {
   const [newProductContent, setNewProductContent] = useState("");
   const inputRef = useRef();

   useEffect(() => {
      inputRef.current.focus()
   });

   const productContent = ({ target }) => {
      setNewProductContent(target.value);
   }

   const onFormSubmit = (event) => {
      event.preventDefault();

      if (newProductContent.trim() !== "") {
         addNewProduct(newProductContent.trim());
         setNewProductContent("");
      }
   };

   return (
      <form className="form js-form" onSubmit={onFormSubmit}>
         <input
            className="form__input"
            type="text" name="product"
            placeholder="Napisz artykuł!"
            value={newProductContent}
            onChange={productContent}
            ref={inputRef}
         />
         <button className="form__button">
            Dodaj do listy
         </button>
      </form>
   );
}

export default Form;