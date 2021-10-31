import Form from "./Form";
import Products from "./Products";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const products = [
  { id: 1, content: "pomidory", done: false, },
  { id: 2, content: "chekolada", done: true, },
];
const hideDoneProducts = false;

function App() {
  return (
    <div className="App">
      <Container>
        <Header
          title="Lista zakupów"
        />

        <Section
          title="Dodaj nowy artykuł"
          body={<Form />}
        />

        <Section
          title="Lista zakupów"
          body={
            <Products products={products} hideDoneProducts={hideDoneProducts} />
          }
          extraSectionTopContent={
            <Buttons products={products} hideDoneProducts={hideDoneProducts} />
          }
        />
      </Container>
    </div>
  );
}

export default App;
