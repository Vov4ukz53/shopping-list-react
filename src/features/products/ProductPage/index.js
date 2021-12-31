import React from "react";
import Container from "../../../common/Container";
import Section from "../../../common/Section";
import ProductInfo from "./ProductInfo/index";

function ProductPage() {
  return (
    <>
      <Container>
        <Section
          title="Szczególy produktu!"
          body={<ProductInfo />}
        />
      </Container>
    </>
  );
};

export default ProductPage;
