import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Buttons from "./Buttons";
import ExampleProductsButton from "./ExampleProductsButton";
import Form from "./Form";
import ProductsList from "./ProductsList";

function Products() {
  return (
    <div className="App">
      <Container>
        <Header
          title="Lista zakupów"
        />

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
    </div>
  );
};

export default Products;
