import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Buttons from "../ProductsPage/Buttons";
import ExampleProductsButton from "./ExampleProductsButton";
import Form from "../ProductsPage/Form";
import ProductsList from "../ProductsPage/ProductsList";

function Products() {
  return (
    <>
      <Header
        title="Lista zakupów"
      />
      <Container>
        <Section
          title="Dodaj nowy artykuł"
          body={<Form />}
          extraHeaderContent={<ExampleProductsButton />}
        />

        <Section
          title="Lista zakupów"
          body={<ProductsList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
    </>
  );
};

export default Products;
