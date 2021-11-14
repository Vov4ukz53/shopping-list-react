import { useState, useRef, useEffect } from "react";
import "./style.css";

const Form = ({ addNewProduct }) => {
   const [newProductContent, setNewProductContent] = useState("");
   const [isEditing, setEditing] = useState(true);
   const inputRef = useRef();

   useEffect(() => {
      inputRef.current.focus()
   }, []);

   const focusInput = () => {
      setEditing(isEditing => isEditing);
      if (isEditing) {
         inputRef.current.focus();
      }
   };

   const productContent = ({ target }) => {
      setNewProductContent(target.value);
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      const trimedNewProductContent = newProductContent.trim();

      if (trimedNewProductContent !== "") {
         addNewProduct(trimedNewProductContent);
         setNewProductContent("");
      }
   };

   return (
      <form className="form" onSubmit={onFormSubmit}>
         <input
            className="form__input"
            type="text" name="product"
            placeholder="Napisz artykuł!"
            value={newProductContent}
            onChange={productContent}
            ref={inputRef}
         />
         <button
            className="form__button"
            onClick={focusInput}
         >
            Dodaj do listy
         </button>
      </form>
   );
}

export default Form;