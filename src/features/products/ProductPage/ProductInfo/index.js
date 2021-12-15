import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectGetProductById } from "../../productsSlice";
import { Wrapper, Paragraph, Strong } from "./styled";

function ProductInfo() {
   const { id } = useParams();
   const product = useSelector(state => selectGetProductById(state, id));

   return (
      product
         ?
         <Wrapper>
            <Paragraph>
               <Strong>Nazwa produktu:</Strong> {product.content}!
            </Paragraph>
            <Paragraph>
               <Strong>Product zaznaczony:</Strong> {product.done ? "Tak!" : "Nie!"}
            </Paragraph>
         </Wrapper>
         : <Paragraph notFind>Nie znaleziono produktu!</Paragraph>
   );
};

export default ProductInfo;