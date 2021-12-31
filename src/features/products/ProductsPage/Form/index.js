import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addProduct } from "../../productsSlice";
import { StyledForm, Button } from "./styled.js";
import { Input} from "../Input";


const Form = () => {
   const [newProductContent, setNewProductContent] = useState("");
   const inputRef = useRef();
   const dispatch = useDispatch();

   useEffect(() => {
      inputRef.current.focus()
   }, []);

   const onProductInputChange = ({ target }) => {
      setNewProductContent(target.value);
   };

   const onFormSubmit = (event) => {
      event.preventDefault();
      const trimedNewProductContent = newProductContent.trim();

      if (trimedNewProductContent !== "") {
         dispatch(addProduct({
            content: trimedNewProductContent,
            done: false,
            id: nanoid(),
         }));
         setNewProductContent("");
         inputRef.current.focus();
      }
   };

   return (
      <StyledForm onSubmit={onFormSubmit}>
         <Input
            type="text" name="product"
            placeholder="Nazwa produktu"
            value={newProductContent}
            onChange={onProductInputChange}
            ref={inputRef}
         />
         <Button
            className="form__button"
         >
            Dodaj do listy
         </Button>
      </StyledForm>
   );
}

export default Form;