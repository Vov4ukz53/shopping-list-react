import { useState } from "react";
import Form from "./Form";
import Products from "./Products";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {
  const [products, setProducts] = useState([
    { id: 1, content: "pomidory", done: false, },
    { id: 2, content: "chekolada", done: true, },
  ]);

  const [hideDone, setHideDone] = useState(false);

  const addNewProduct = (newProductContent) => {
    setProducts(products => [
      ...products,
      {
        content: newProductContent,
        done: false,
        id: products.length ? products[products.length - 1].id + 1 : 1,
      },
    ]);
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeProduct = (id) => {
    setProducts(products =>
      products.filter(product => product.id !== id));
  };

  const toggleDoneProduct = (id) => {
    setProducts(products => products.map(product => {
      if (product.id === id) {
        return { ...product, done: !product.done };
      }

      return product;
    }));
  };

  const setAllDone = () => {
    setProducts(products => products.map(product => ({
      ...product,
      done: true,
    })));
  };

  return (
    <div className="App">
      <Container>
        <Header
          title="Lista zakupów"
        />

        <Section
          title="Dodaj nowy artykuł"
          body={<Form addNewProduct={addNewProduct} />}
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
          extraSectionTopContent={
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
