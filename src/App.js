import { useState } from "react";
import Form from "./Section/Form";
import Products from "./Section/Products";
import Buttons from "./Section/Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useProducts } from "./useProducts";


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    products,
    addNewProduct,
    removeProduct,
    toggleDoneProduct,
    setAllDone
  } = useProducts();

  return (
    <div className="App">
      <Container>
        <Header
          title="Lista zakupów"
        />

        <Section
          title="Dodaj nowy artykuł"
          body={
            <Form
              addNewProduct={addNewProduct}
            />
          }
        />

        <Section
          title="Lista zakupów"
          body={
            <Products
              products={products}
              hideDone={hideDone}
              removeProduct={removeProduct}
              toggleDoneProduct={toggleDoneProduct}
            />
          }
          extraHeaderContent={
            <Buttons
              products={products}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              removeProduct={removeProduct}
              setAllDone={setAllDone}
            />
          }
        />
      </Container>
    </div>
  );
};

export default App;
