import { useState } from "react";
import "./style.css";

const Form = ({ addNewProduct }) => {
   const [newProductContent, setNewProductContent] = useState("");

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
            autoFocus type="text" name="product"
            placeholder="Napisz artykuł!"
            value={newProductContent}
            onChange={productContent}
         />
         <button className="form__button">
            Dodaj do listy
         </button>
      </form>
   );
}

export default Form;