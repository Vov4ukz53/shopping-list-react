import { useState } from "react";
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

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

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
            <Products products={products} hideDone={hideDone} />
          }
          extraSectionTopContent={
            <Buttons
              products={products}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />
          }
        />
      </Container>
    </div>
  );
}

export default App;
