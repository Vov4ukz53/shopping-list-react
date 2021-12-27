import React from "react";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import ProductInfo from "./ProductInfo/index";

function ProductPage() {
  return (
    <>
      <Header
        title="Lista zakupów"
      />
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
