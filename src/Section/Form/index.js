import { useState, useRef, useEffect } from "react";
import { StyledForm, Input, Button } from "./styled.js";

const Form = ({ addNewProduct }) => {
   const [newProductContent, setNewProductContent] = useState("");
   const inputRef = useRef();

   useEffect(() => {
      inputRef.current.focus()
   }, []);

   const focusInput = () => {
      inputRef.current.focus();
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
      <StyledForm onSubmit={onFormSubmit}>
         <Input
            type="text" name="product"
            placeholder="Napisz artykuł!"
            value={newProductContent}
            onChange={productContent}
            ref={inputRef}
         />
         <Button
            className="form__button"
            onClick={focusInput}
         >
            Dodaj do listy
         </Button>
      </StyledForm>
   );
}

export default Form;